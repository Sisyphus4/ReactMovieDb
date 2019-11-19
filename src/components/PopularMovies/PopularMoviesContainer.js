import { connect } from 'react-redux';
import { getMovies } from '../../actions/getMovies';
import { PopularMovies } from './PopularMovies';
import { setComparedId } from '../../actions/setComparedId';


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
      dispatch(setComparedId(id));
    },
  };
};

export const PopularMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
