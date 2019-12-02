import { connect } from 'react-redux';
import { getMovie } from '../../redux/actions/getMovie';
import { setComparedId } from '../../redux/actions/setComparedId';
import { Movie } from './Movie';

const mapStateToProps = state => ({
  movie: state.movieReducer.movie,
  loading: state.movieReducer.loading,
  error: state.movieReducer.error,
})
const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => {
      dispatch(getMovie(id));
    },
    setComparedId: (id) => {
      dispatch(setComparedId(id));
    }
  };
};

export const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
