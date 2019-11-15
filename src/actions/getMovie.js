import {
  GET_MOVIES_STARTED,
  GET_MOVIE_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_EXISTED_MOVIE_SUCCESS,
} from '../types/types.js';
import axios from 'axios';
import helper from './helper';

export const getMovie = (id, detailedMovies) => {
  let neededMovie = helper(id, detailedMovies);
  return !!neededMovie //if we found one, then send him otherwise make a request
    ? dispatch => {
      dispatch(getExistedMovieSuccess(neededMovie))
    }
    : dispatch => {
      dispatch(getMoviesStarted());
      axios
        .get('https://api.themoviedb.org/3/movie/' + id + '?api_key=619815e4b2022dff08a72fdc13100b01')
        .then(res => {
          dispatch(getMovieSuccess(res.data));
        })
        .catch(err => {
          dispatch(getMoviesFailure(err.message));
        });
    };
};

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