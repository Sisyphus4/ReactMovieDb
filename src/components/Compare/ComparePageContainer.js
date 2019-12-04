import { connect } from 'react-redux';
import { clearComparedMovies } from '../../redux/actions/clearComparedMovies';
import { removeComparedMovie } from '../../redux/actions/removeComparedMovie';
import { getMovie } from '../../redux/actions/getMovie';
import { ComparePage } from './ComparePage';
import { setComparedId } from '../../redux/actions/setComparedId';


const mapStateToProps = state => ({
  comparedIds: state.moviesReducer.comparedIds,
  detailedMovies: state.movieReducer.detailedMovies,
});
const mapDispatchToProps = (dispatch) => {
  return {
    clearComparedMovies: () => {
      dispatch(clearComparedMovies());
    },
    removeComparedMovie: (id) => {
      dispatch(removeComparedMovie(id));
    },
    getMovie: (id) => {
      dispatch(getMovie(id));
    },
    setComparedId: (id) => {
      dispatch(setComparedId(id));
    },
  };
};
export const ComparePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComparePage);