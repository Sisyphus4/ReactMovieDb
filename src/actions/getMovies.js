import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';
import axios from 'axios';

export const getMovies = () => {
  return dispatch => {
    dispatch(getMoviesStarted()); //todo:make getFilmsStarted
    axios
      .get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=619815e4b2022dff08a72fdc13100b01')
      .then(res => {
        dispatch(getMoviesSuccess(res.data.results));
      })
      .catch(err => {
        dispatch(getMoviesFailure(err.message));
      });
  };
};

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