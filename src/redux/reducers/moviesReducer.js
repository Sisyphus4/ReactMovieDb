import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_COMPARED_ID,
  CLEAR_COMPARED_MOVIES,
  SEARCH_MOVIE_SUCCESS,
  REMOVE_COMPARED_MOVIE,
} from '../types/types.js';

const initialState = {
  loading: false,
  movies: [],
  error: '',
  searchResults: [],
  comparedIds: [],
};

const MaxComparedMoviesLength = 4;

function addComparedId(state, id) {
  var comparedIds = [...state.comparedIds];
  comparedIds.push(id); // provides liquidity to array
  if (comparedIds.length > MaxComparedMoviesLength)  // maximum movies kept for comparison
    comparedIds.shift();
  return { ...state, comparedIds }
}

function removeId(state, id) {
  let comparedIds = [...state.comparedIds];
  comparedIds.splice(comparedIds.indexOf(id), 1);
  return { ...state, comparedIds }
}

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        movies: action.payload,
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        searchResults: action.payload,
      };
    case SET_COMPARED_ID:
      return addComparedId(state, action.payload);
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case CLEAR_COMPARED_MOVIES:
      return {
        ...state,
        comparedIds: [],
      };
    case REMOVE_COMPARED_MOVIE:
      return removeId(state, action.payload);
    default:
      return state;
  }
}