import { connect } from 'react-redux';
import { getMovies } from '../../redux/actions/getMovies';
import { PopularMovies } from './PopularMovies';
import { setComparedId } from '../../redux/actions/setComparedId';


const mapStateToProps = state => ({
  movies: state.moviesReducer.movies,
  movie: state.movieReducer.movie,
  detailedMovies: state.movieReducer.detailedMovies,
});
const mapDispatchToProps = dispatch => {
  return {
    showMovies: () => {
      dispatch(getMovies());
    },
    setComparedId: (id) => {
      dispatch(setComparedId(id));
    },
  };
};

export const PopularMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
