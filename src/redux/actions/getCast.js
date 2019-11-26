import {
  GET_MOVIES_STARTED,
  GET_CAST_SUCCESS,
  GET_EXISTED_CAST_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';
import axios from 'axios';
import {
  APIkey,
  getCastRequest,
  getMovieRequest,
} from '../../movieDbAPI/movieDb';

const getCastSuccess = (cast) => ({
  type: GET_CAST_SUCCESS,
  payload: cast,
});
const getExistedCastSuccess = cast => ({
  type: GET_EXISTED_CAST_SUCCESS,
  payload: cast,
});
// Using the same actions as in movies because they doesn't differ
const getMoviesStarted = () => ({
  type: GET_MOVIES_STARTED
});

const getMoviesFailure = error => ({
  type: GET_MOVIES_FAILURE,
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
      // Otherwise download the new one
      dispatch(getMoviesStarted());
      axios
        .get(getMovieRequest + id + getCastRequest + APIkey)
        .then(res => {
          dispatch(getCastSuccess(res.data));
        })
        .catch(err => {
          dispatch(getMoviesFailure(err.message));
        });
    }
  }
};
