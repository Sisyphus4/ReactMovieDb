import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_COMPARE,
  SET_COMPARED_ID,
  CLEAR,
} from '../types/types.js';

const initialState = {
  loading: false,
  movies: [],
  error: null,
  moviesToCompare: [],
  comparedId: [],
};
function helper(state, action) {
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
    case SET_COMPARE:
      let temp = state.moviesToCompare.push(action.payload)
      return {
        ...state,
        moviesToCompare: temp,
      }
    case SET_COMPARED_ID:
      return helper(state, action);
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case CLEAR:
      return {
        ...state,
        moviesToCompare: [],
      };
    default:
      return state;
  }
}