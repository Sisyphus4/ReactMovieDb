import {
  GET_MOVIES_STARTED,
  GET_MOVIE_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_EXISTED_MOVIE_SUCCESS,
} from '../types/types.js';
import axios from 'axios';
import {
  APIkey,
  getMovieRequest,
} from '../../movieDbAPI/moiveDb.js';

const getMovieSuccess = movie => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie,
});

const getExistedMovieSuccess = movie => ({
  type: GET_EXISTED_MOVIE_SUCCESS,
  payload: movie,
});

const getMoviesStarted = () => ({
  type: GET_MOVIES_STARTED
});

const getMoviesFailure = error => ({
  type: GET_MOVIES_FAILURE,
  payload: {
    error
  }
});

export const getMovie = (id) => {
  return (dispatch, getState) => {
    //Check if the movie is already downloaded
    let neededMovie = getState().movieReducer.detailedMovies.find((movie) => movie.id === id);
    if (neededMovie) {
      //If it is then just return the existed one
      dispatch(getExistedMovieSuccess(neededMovie));
    }
    else {
      //Otherwise download the new one
      dispatch(getMoviesStarted());
      axios
        .get(getMovieRequest + id + APIkey)
        .then(res => {
          dispatch(getMovieSuccess(res.data));
        })
        .catch(err => {
          dispatch(getMoviesFailure(err.message));
        });
    }
  }
}