import {
  SET_COMPARED_ID,
} from '../types/types.js';

const setCompare = id => ({
  type: SET_COMPARED_ID,
  payload: id,
});

export const setComparedId = (id) => {
  return (dispatch) => {
      dispatch(setCompare(id));
  }
};