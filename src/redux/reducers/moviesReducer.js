import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_COMPARED_ID,
  CLEAR_COMPARED_MOVIES,
  SEARCH_MOVIE_SUCCESS,
  REMOVE_COMPARED_MOVIE,
  SET_ACTIVE_TRUE,
  SET_ACTIVE_FALSE,
} from '../types/types.js';

const initialState = {
  loading: false,
  movies: [],
  error: '',
  searchResults: [],
  comparedId: [],
  inputActive: false,
};

function addComparedId(state, id) {
  var comparedId = [...state.comparedId];
  comparedId.push(id); // provides liquidity to array
  if (comparedId.length > 4)  // maximum movies kept for comparison
    comparedId.shift();
  return { ...state, comparedId }
}

function removeId(state, id) {
  let comparedId = [...state.comparedId];
  comparedId.splice(comparedId.indexOf(id), 1);
  return { ...state, comparedId }
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
        comparedId: [],
      };
    case REMOVE_COMPARED_MOVIE:
      return removeId(state, action.payload);
    case SET_ACTIVE_TRUE:
      return {
        ...state,
        inputActive: true,
      };
    case SET_ACTIVE_FALSE:
      return {
        ...state,
        inputActive: false,
      };
    default:
      return state;
  }
}