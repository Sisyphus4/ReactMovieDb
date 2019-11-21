import { connect } from 'react-redux';
import { clearComparedMovies } from '../../redux/actions/clearComparedMovies';
import { getMovie } from '../../redux/actions/getMovie';
import { ComparePage } from './ComparePage'

const mapStateToProps = state => ({
  comparedId: state.moviesReducer.comparedId,
  detailedMovies: state.movieReducer.detailedMovies,
});
const mapDispatchToProps = (dispatch) => {
  return {
    clearComparedMovies: () => {
      dispatch(clearComparedMovies());
    },
    getMovie: (id) => {
      dispatch(getMovie(id));
    },
  };
};
export const ComparePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComparePage);