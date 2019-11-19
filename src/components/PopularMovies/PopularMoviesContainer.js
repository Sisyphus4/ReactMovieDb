import { connect } from 'react-redux';
import { getMovies } from '../../actions/getMovies';
import { ShowMovies } from './PopularMovies';
import { setComparedIdFunc } from '../../actions/setComparedId';


const mapStateToProps = state => ({
  movies: state.generalReducer.movies,
  movie: state.movieReducer.movie,
  detailedMovies: state.movieReducer.detailedMovies,
});
const mapDispatchToProps = dispatch => {
  return {
    showMovies: () => {
      dispatch(getMovies());
    },
    setComparedIdFunc: (id) => {
      dispatch(setComparedIdFunc(id));
    },
  };
};

export const PopularMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMovies);
