import { connect } from 'react-redux';
import { getMovie } from '../../actions/getMovie';
import { getCast } from '../../actions/getCast';
import { setCompareFunc } from '../../actions/setCompare';
import {Movie} from './Movie';

const mapStateToProps = state => ({ 
  movie: state.movieReducer.movie,
  movies: state.movieReducer.detailedMovies,
  cast: state.movieReducer.cast,
  storedCast: state.movieReducer.storedCast,
  })
const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentMovie: (id, movies) => {
      dispatch(getMovie(id, movies));
    },
    getCast: (id, cast) => {
      dispatch(getCast(id, cast));
    },
    compare:(prop)=>{
      dispatch(setCompareFunc(prop));
    }
  };
};

export const MovieContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Movie);
