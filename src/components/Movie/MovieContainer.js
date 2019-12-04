import { connect } from 'react-redux';
import { getMovie } from '../../redux/actions/getMovie';
import { setComparedId } from '../../redux/actions/setComparedId';
import { Movie } from './Movie';
import { removeComparedMovie } from '../../redux/actions/removeComparedMovie';

const mapStateToProps = state => ({
  movie: state.movieReducer.movie,
  loading: state.movieReducer.loading,
  error: state.movieReducer.error,
  comparedIds:state.moviesReducer.comparedIds,
})
const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => {
      dispatch(getMovie(id));
    },
    setComparedId: (id) => {
      dispatch(setComparedId(id));
    },
    removeComparedMovie: (id) => {
      dispatch(removeComparedMovie(id));
    },
  };
};

export const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
