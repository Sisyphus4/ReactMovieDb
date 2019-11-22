import {
  GET_MOVIES_STARTED,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_COMPARED_ID,
  CLEAR_COMPARED_MOVIES,
  REMOVE_COMPARED_MOVIE,
} from '../types/types.js';

const initialState = {
  loading: false,
  movies: [],
  error: null,
  comparedId: [],
};

function addComparedId(state, id) {
  var comparedId = [...state.comparedId];
  comparedId.unshift(id); //provides liquidity to array
  if (comparedId.length > 2)  //maximum 2 movies kept for comparison
    comparedId.pop();
  return { ...state, comparedId }
}

function removeId(state, id){
  let comparedId = [...state.comparedId];
  comparedId.splice( comparedId.indexOf(id), 1 );
  return {...state, comparedId}
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
    default:
      return state;
  }
}