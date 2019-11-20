import { connect } from 'react-redux';
import { getCast } from '../../actions/getCast';
import { MovieCast } from './MovieCast';

const mapStateToProps = state => ({
    movieCast: state.movieReducer.cast,
    id: state.movieReducer.movie.id,
})
const mapDispatchToProps = (dispatch) => {
    return {
        getCast: (id) => {
            dispatch(getCast(id));
        },
    };
};

export const MovieCastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCast);
