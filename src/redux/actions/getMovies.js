import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';
import axios from 'axios';

import {
  getPopularMoviesRequest,
} from '../../movieDbAPI/movieDb';


const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
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

export const getMovies = () => {
  return dispatch => {
    dispatch(getMoviesStarted());
    axios
      .get(getPopularMoviesRequest)
      .then(res => {
        dispatch(getMoviesSuccess(res.data.results));
      })
      .catch(err => {
        dispatch(getMoviesFailure(err.message));
      });
  };
};