import {
    REMOVE_COMPARED_MOVIE,
} from '../types/types.js';

const removeComparedMovieAction = (id) => ({
    type: REMOVE_COMPARED_MOVIE,
    payload: id,
});

export const removeComparedMovie = (id) => {
    return dispatch =>
        dispatch(removeComparedMovieAction(id));
};