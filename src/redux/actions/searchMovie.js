import {
  GET_MOVIES_STARTED,
  SEARCH_MOVIE_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';
import axios from 'axios';

import {
  searchMovieRequest,
  APIkey,
  query,
} from '../../movieDbAPI/movieDb';


const searchMovieSuccess = movies => ({
  type: SEARCH_MOVIE_SUCCESS,
  payload: movies
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

export const searchMovie = (searchedMovie) => {
  return dispatch => {
    dispatch(getMoviesStarted());
    axios
      .get(searchMovieRequest + APIkey + query + searchedMovie)
      .then(res => {
        dispatch(searchMovieSuccess(res.data.results));
      })
      .catch(err => {
        dispatch(getMoviesFailure(err.message));
      });
  };
};