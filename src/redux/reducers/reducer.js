import { combineReducers } from 'redux'
import generalReducer from './generalReducer'
import movieReducer from './movieReducer'

export default combineReducers({
  generalReducer,
  movieReducer,
});