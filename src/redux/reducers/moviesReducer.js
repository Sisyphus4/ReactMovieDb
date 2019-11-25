import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_COMPARED_ID,
  CLEAR_COMPARED_MOVIES,
  SEARCH_MOVIE_SUCCESS,
} from '../types/types.js';

const initialState = {
  loading: false,
  movies: [],
  searchResults: [],
  error: null,
  comparedId: [],
};
function addComparedId(state, action) {
  var comparedId = [...state.comparedId];
  comparedId.unshift(action.payload); //provides liquidity to array
  if (comparedId.length > 2)  //maximum 2 movies kept for comparison
    comparedId.pop();
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
        error: null,
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
      return addComparedId(state, action);
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
    default:
      return state;
  }
}