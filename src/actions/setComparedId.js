import {
    SET_COMPARED_ID,
  } from '../types/types.js';
  
  export const setComparedIdFunc = (id) => {
    return dispatch => 
      dispatch(setCompare(id));
  };
  
  const setCompare = id => ({
    type: SET_COMPARED_ID,
    payload: id,
  });