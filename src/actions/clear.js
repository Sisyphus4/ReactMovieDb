import {
    CLEAR,
  } from '../types/types.js';
  
  export const clearFunc = () => {
    return dispatch => 
      dispatch(clear());
  };
  
  const clear = () => ({
    type: CLEAR,
  });