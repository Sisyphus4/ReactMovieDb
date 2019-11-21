import {
  CLEAR_COMPARED_MOVIES,
} from '../types/types.js';

const clearComparedMoviesAction = () => ({
  type: CLEAR_COMPARED_MOVIES,
});

export const clearComparedMovies = () => {
  return dispatch =>
    dispatch(clearComparedMoviesAction());
};
