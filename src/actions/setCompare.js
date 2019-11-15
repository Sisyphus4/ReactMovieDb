import {
  SET_COMPARE,
} from '../types/types.js';

export const setCompareFunc = (prop) => {
  return dispatch => 
    dispatch(setCompare(prop));
};

const setCompare = prop => ({
  type: SET_COMPARE,
  payload: prop,
});