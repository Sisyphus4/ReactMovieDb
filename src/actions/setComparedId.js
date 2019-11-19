import {
  SET_COMPARED_ID,
} from '../types/types.js';

export const setComparedIdFunc = (id) => {
  return (dispatch, getState) => {
    if (id != getState().generalReducer.comparedId[0] && id != getState().generalReducer.comparedId[1])
      dispatch(setCompare(id));
  }
};

const setCompare = id => ({
  type: SET_COMPARED_ID,
  payload: id,
});