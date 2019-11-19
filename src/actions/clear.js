import {
  CLEAR,
} from '../types/types.js';

const clear = () => ({
  type: CLEAR,
});

export const clearFunc = () => {
  return dispatch =>
    dispatch(clear());
};