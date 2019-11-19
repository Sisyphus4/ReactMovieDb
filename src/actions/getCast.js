import {
  GET_MOVIES_STARTED,
  GET_CAST_SUCCESS,
  GET_EXISTED_CAST_SUCCESS,
  GET_MOVIES_FAILURE,
} from '../types/types.js';
import axios from 'axios';
import searchCact from '../utilities/search';

export const getCast = (id) => {
  return (dispatch, getState) => {
    //Check if the cast is already downloaded
    let neededCast = searchCact(id, getState().movieReducer.storedCast);
    if (!!neededCast) {
      //If it is then just return the existed one
      dispatch(getExistedCastSuccess(neededCast))
    }
    else {
      //Otherwise download the new one
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
//Using the same actions as in movies because they doesn't differ
const getMoviesStarted = () => ({
  type: GET_MOVIES_STARTED
});

const getMoviesFailure = error => ({
  type: GET_MOVIES_FAILURE,
  payload: {
    error
  }
});