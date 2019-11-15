import { connect } from 'react-redux';
import { getMovies } from '../../actions/getMovies';
import { ShowMovies } from './ShowMovies';
import { getMovie } from '../../actions/getMovie';
import { setCompareFunc } from '../../actions/setCompare';
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
    // getCurrentMovie: (id, movies) => {
    //   dispatch(getMovie(id, movies));
    // },
    // compare: (prop) => {
    //   dispatch(setCompareFunc(prop));
    // }
  };
};

export const PopularMoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowMovies);
