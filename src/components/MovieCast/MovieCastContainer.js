import { connect } from 'react-redux';
import { getCast } from '../../redux/actions/getCast';
import { MovieCast } from './MovieCast';

const mapStateToProps = state => ({
    movieCast: state.movieReducer.cast,
})
const mapDispatchToProps = (dispatch) => {
    return {
        getCast: () => {
            dispatch(getCast());
        },
    };
};

export const MovieCastContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCast);
