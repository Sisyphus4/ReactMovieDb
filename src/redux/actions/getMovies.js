import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';
import MovieDbService from '../../services/movieDbAPI/MovieDbService';

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
    MovieDbService.getData('movies')
    .then((res) => {
      dispatch(getMoviesSuccess(res.results));
    })
    .catch(err => {
      dispatch(getMoviesFailure(err.message));
    });
  };
};