import {
  GET_MOVIE_STARTED,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_FAILURE,
  GET_EXISTED_MOVIE_SUCCESS,
} from '../types/types';
import axios from 'axios';
import {
  APIkey,
  getMovieRequest,
} from '../../movieDbAPI/movieDb';

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
  const request = getMovieRequest + id + APIkey;
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
      axios
        .get(request)
        .then(res => {
          dispatch(getMovieSuccess(res.data));
        })
        .catch(err => {
          dispatch(getMovieFailure(err.message));
        });
    }
  }
}