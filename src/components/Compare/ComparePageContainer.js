import { connect } from 'react-redux';
import { clearFunc } from '../../actions/clear';
import { getMovie } from '../../actions/getMovie';
import { ComparePage } from './ComparePage'

const mapStateToProps = state => ({
  comparedId: state.generalReducer.comparedId,
  detailedMovies: state.movieReducer.detailedMovies,
});
const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      dispatch(clearFunc());
    },
    getMovie: (id) => {
      dispatch(getMovie(id));
    },
    // compare: (prop) => {
    //   dispatch(setCompareFunc(prop));
    // },
    //left for back up
    // addMovieToCompare: () => {
    //   dispatch(addMovieToCompare());
    // }
  };
};
export const ComparePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComparePage);