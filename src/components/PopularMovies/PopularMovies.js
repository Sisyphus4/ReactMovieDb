import React, { useEffect } from 'react';
import { store } from 'react-notifications-component';

export const PopularMovies = props => {
  const imgsrc = 'https://image.tmdb.org/t/p/w185/';
  const handleCompareClick = (arg, e) => {
    e.stopPropagation(); //this is needed in order not to go to the movie page
    props.setComparedId(arg.id);
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
    props.history.push('./movie/' + movie.id); //send us to movie page
  };

  useEffect(() => {
    props.showMovies();
  }, [1]);

  if (props.loading)
    return <div>Loading</div>
  else
    return !props.movies || props.movies.length === 0
      ? <div>
        There are no movies.
      </div>
      : <div className='popularMovies'>
        {props.movies.map(movie =>
          <div key={movie.id} className='oneOfMovies' onClick={(e)=>handleClick(movie,e)}>
            <h1>{movie.original_title}</h1>
            <img src={imgsrc + movie.poster_path} />
            <p>Release date: {movie.release_date}</p>
            <button className='compareButton' type='button' onClick={(e)=>handleCompareClick(movie,e)}>Add to Compare</button>
          </div>)}
      </div>;
};