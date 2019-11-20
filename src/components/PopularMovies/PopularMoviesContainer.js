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
<<<<<<< HEAD
    setComparedIdFunc: (id) => {
=======
    setComparedId: (id) => {
>>>>>>> 03365eb8b9f294c17a93955b99bb36bf22cbcf02
      dispatch(setComparedId(id));
    },
  };
};

export const PopularMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);
