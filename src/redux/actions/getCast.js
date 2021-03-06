import {
  GET_MOVIE_STARTED,
  GET_CAST_SUCCESS,
  GET_EXISTED_CAST_SUCCESS,
  GET_MOVIE_FAILURE,
} from '../types/types.js';

import MovieDbService from '../../services/movieDbAPI/MovieDbService';


const getCastSuccess = (cast) => ({
  type: GET_CAST_SUCCESS,
  payload: cast,
});
const getExistedCastSuccess = cast => ({
  type: GET_EXISTED_CAST_SUCCESS,
  payload: cast,
});
//Using the same actions as in movies because they doesn't differ
const getMovieStarted = () => ({
  type: GET_MOVIE_STARTED
});

const getMovieFailure = error => ({
  type: GET_MOVIE_FAILURE,
  payload: {
    error
  }
});

export const getCast = () => {
  return (dispatch, getState) => {
    let id = getState().movieReducer.movie.id;

    // Check if the cast is already downloaded
    let neededCast = getState().movieReducer.storedCast.find((cast) => cast.id === id);

    if (neededCast) {
      // If it is then just return the existed one
      dispatch(getExistedCastSuccess(neededCast))
    }
    else {
      //Otherwise download the new one
      dispatch(getMovieStarted());
      MovieDbService.getData('cast', id)
        .then((res) => {
          dispatch(getCastSuccess(res));
        })
        .catch(err => {
          dispatch(getMovieFailure(err.message));
        });
    }
  }
};
