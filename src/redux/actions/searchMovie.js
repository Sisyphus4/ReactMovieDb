import {
  SEARCH_MOVIE_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';

import MovieDbService from '../../services/movieDbAPI/MovieDbService';



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
  return searchedMovie
    ? dispatch => {
      MovieDbService.getData('searchMovie', searchedMovie)
        .then(res => {
          dispatch(searchMovieSuccess(res.results.slice(0,10)));
        })
        .catch(err => {
          dispatch(getMoviesFailure(err.message));
        });
    }
    : dispatch => dispatch(searchMovieSuccess([]));
};