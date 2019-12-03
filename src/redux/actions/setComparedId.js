import {
  SET_COMPARED_ID,
} from '../types/types.js';

const setCompare = id => ({
  type: SET_COMPARED_ID,
  payload: id,
});

export const setComparedId = (id) => {
  return (dispatch, getState) => {
    if (id != getState().moviesReducer.comparedIds[0] && id != getState().moviesReducer.comparedIds[1])
      dispatch(setCompare(id));
  }
};