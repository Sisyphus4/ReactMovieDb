import React from 'react'
import { store } from 'react-notifications-component';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setComparedId } from '../../redux/actions/setComparedId';
import {
    imgsrc185,
} from '../../movieDbAPI/movieDb';


export const SearchMoviePage = (props) => {
    const searchResults = useSelector(state => state.moviesReducer.searchResults);
    const dispatch = useDispatch();
    const handleCompareClick = (movie, e) => {
        e.stopPropagation(); // this is needed in order not to go to the movie page
        dispatch(setComparedId(movie.id));
        store.addNotification({
            title: 'Added',
            message: 'This movie is added to compare list',
            type: 'success',                         // 'default', 'success', 'info', 'warning'
            container: 'top-center',                // where to position the notifications
            dismiss: {
                duration: 3000
            }
        });
    }

    const handleClick = (movie) => {
        props.history.push('./movie/' + movie.id); // send us to movie page
    };

    if (searchResults.length > 0) {
        return <div className='popularMovies'>
            {searchResults.map(movie => {
                const imgsrc = imgsrc185 + movie.poster_path;
                return <div key={movie.id} className='oneOfMovies' onClick={(e) => handleClick(movie, e)}>
                    <h1>{movie.original_title}</h1>
                    <img src={imgsrc} />
                    <p>Release date: {movie.release_date}</p>
                    <button className='compareButton' type='button' onClick={(e) => handleCompareClick(movie, e)}>Add to Compare</button>
                </div>
            })}
        </div>
    }
    else {
        return <div>
            <p>There is no search results</p>
        </div>
    }
}