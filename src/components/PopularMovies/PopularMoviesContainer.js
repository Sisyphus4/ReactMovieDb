import { connect } from 'react-redux';
import { getMovies } from '../../redux/actions/getMovies';
import PopularMovies from './PopularMovies';
import { setComparedId } from '../../redux/actions/setComparedId';
import { removeComparedMovie } from '../../redux/actions/removeComparedMovie';


const mapStateToProps = state => ({
  movies: state.moviesReducer.movies,
  movie: state.movieReducer.movie,
  detailedMovies: state.movieReducer.detailedMovies,
  loading: state.moviesReducer.loading,
  error: state.moviesReducer.error,
  comparedIds:state.moviesReducer.comparedIds,
});
const mapDispatchToProps = dispatch => {
  return {
    showMovies: () => {
      dispatch(getMovies());
    },
    setComparedId: (id) => {
      dispatch(setComparedId(id));
    },
    removeComparedMovie: (id) => {
      dispatch(removeComparedMovie(id));
    },
  };
};

export const PopularMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
