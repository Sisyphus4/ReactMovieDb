import { connect } from 'react-redux';
import { getMovie } from '../../actions/getMovie';
import { getCast } from '../../actions/getCast';
import { setComparedId } from '../../actions/setComparedId';
import { Movie } from './Movie';

const mapStateToProps = state => ({
  movie: state.movieReducer.movie,
  movieCast: state.movieReducer.cast,
})
const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => {
      dispatch(getMovie(id));
    },
    getCast: (id) => {
      dispatch(getCast(id));
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
