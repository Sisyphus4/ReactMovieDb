import {
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

const getMoviesFailure = error => ({
  type: GET_MOVIES_FAILURE,
  payload: {
    error
  }
});

export const searchMovie = (searchedMovie) => {
  const request = searchMovieRequest + APIkey + query + searchedMovie;
  
  return dispatch => {
    axios
      .get(request)
      .then(res => {
        dispatch(searchMovieSuccess(res.data.results));
      })
      .catch(err => {
        dispatch(getMoviesFailure(err.message));
      });
  };
};