import {
  SET_COMPARED_ID,
} from '../types/types.js';

const setCompare = id => ({
  type: SET_COMPARED_ID,
  payload: id,
});

export const setComparedId = (id) => {
  return (dispatch, getState) => {
    if (id != getState().generalReducer.comparedId[0] && id != getState().generalReducer.comparedId[1])
      dispatch(setCompare(id));
  }
};