import {
  GET_MOVIE_STARTED,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_EXISTED_MOVIE_SUCCESS,
} from '../types/types';
import MovieDbService from '../../services/movieDbAPI/MovieDbService';

const getMovieSuccess = movie => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie,
});

const getExistedMovieSuccess = movie => ({
  type: GET_EXISTED_MOVIE_SUCCESS,
  payload: movie,
});

const getMovieStarted = () => ({
  type: GET_MOVIE_STARTED,
});

const getMovieFailure = error => ({
  type: GET_MOVIE_FAILURE,
  payload: {
    error
  }
});

export const getMovie = (id) => {
  return (dispatch, getState) => {
    // Check if the movie is already downloaded
    let neededMovie = getState().movieReducer.detailedMovies.find((movie) => movie.id === id);
    if (neededMovie) {
      // If it is then just return the existed one
      dispatch(getExistedMovieSuccess(neededMovie));
    }
    else {
      //Otherwise download the new one
      dispatch(getMovieStarted());
      MovieDbService.getData('movie', id)
        .then((res) => {
          dispatch(getMovieSuccess(res));
        })
        .catch(err => {
          dispatch(getMovieFailure(err.message));
        });
    }
  }
}