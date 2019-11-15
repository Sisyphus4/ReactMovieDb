import {
  GET_MOVIES_STARTED,
  GET_CAST_SUCCESS,
  GET_EXISTED_CAST_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';
import axios from 'axios';
import helper from './helper';

export const getCast = (id, storedCast) => {
  let neededCast = helper(id, storedCast);
  return !!neededCast
    ? dispatch => {
      dispatch(getExistedCastSuccess(neededCast))
    }
    : dispatch => {
      dispatch(getMoviesStarted());
      axios
        .get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=619815e4b2022dff08a72fdc13100b01')
        .then(res => {
          dispatch(getCastSuccess(res.data));
        })
        .catch(err => {
          dispatch(getMoviesFailure(err.message));
        });
    }
};

const getCastSuccess = (cast) => ({
  type: GET_CAST_SUCCESS,
  payload: cast,
});
const getExistedCastSuccess = cast => ({
  type: GET_EXISTED_CAST_SUCCESS,
  payload: cast,
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