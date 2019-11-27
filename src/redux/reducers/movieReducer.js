import {
  GET_MOVIE_SUCCESS,
  GET_EXISTED_MOVIE_SUCCESS,
  GET_EXISTED_CAST_SUCCESS,
  GET_CAST_SUCCESS,
  GET_MOVIE_STARTED,
  GET_MOVIE_FAILURE,
} from '../types/types.js';

const initialState = {
  movie: null,
  loading: false,
  detailedMovies: [],
  error: '',
  cast: null,
  storedCast: [],
};
export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        movie: action.payload,
        // We keep movies that we've downloaded in order not to make an extra server request
        detailedMovies: [...state.detailedMovies, action.payload],
      };
    case GET_EXISTED_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        movie: action.payload,
      };
    case GET_EXISTED_CAST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        cast: action.payload,
      };
    case GET_CAST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        cast: action.payload,
        //We keep cast that we've downloaded in order not to make an extra server request 
        storedCast: [...state.storedCast, action.payload],
      };
    default:
      return state;
  }
}