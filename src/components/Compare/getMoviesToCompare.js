import { connect } from 'react-redux';
import { getMovie } from '../../actions/getMovie';
import { setCompareFunc } from '../../actions/setCompare';

export const getCompare = (props) => {
    console.log('asd');
    for(item of comparedId){
        getCurrentMovie(item,props.movies);
    }
    for(item of comparedId){
        for (item2 of movies){
            if(item2.id==item){
                setCompareFunc(item2);
            }
        }
    }
}

const mapStateToProps = state => ({
    movie: state.movieReducer.movie,
    detailedMovies: state.movieReducer.detailedMovies,
    comparedId: state.generalReducer.comparedId,
});
const mapDispatchToProps = dispatch => {
    return {
        getCurrentMovie: (id, movies) => {
            dispatch(getMovie(id, movies));
        },
        compare: (prop) => {
            dispatch(setCompareFunc(prop));
        }
    };
};

export const getCompareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(getCompare);
