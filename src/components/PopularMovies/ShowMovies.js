import React, { useState, useEffect } from 'react';
import { store } from 'react-notifications-component';

export const ShowMovies = props => {
  const handleCompareClick = (arg, e) => {
    e.stopPropagation(); //this is needed in order not to go to the movie page
    props.setComparedIdFunc(arg.id);
    // props.getCurrentMovie(arg.id, props.detailedMovies);
    // props.compare(props.movie);
    store.addNotification({
      title: 'Added',
      message: 'This movie is added to compare list',
      type: 'success',                         // 'default', 'success', 'info', 'warning'
      container: 'top-center',                // where to position the notifications
      animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
      animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
      dismiss: {
        duration: 3000
      }
    });
  }
  const handleClick = (e) => {
    props.history.push('./movie/' + e.id); //send us to movie page
  }
  useEffect(() => {
    props.showMovies();
  }, [1]);
  if (props.loading)
    return <div>загрузка</div>
  else
    return !props.movies || props.movies.length === 0
      ?<div>
        There are no movies.
      </div>
      : <div className='popularMovies'>
        {props.movies.map(prop =>
          <div key={prop.id} className='oneOfMovies' onClick={handleClick.bind(this, prop)}>
            <h1>{prop.original_title}</h1>
            <img src={'https://image.tmdb.org/t/p/w185/' + prop.poster_path} />
            <p>Release date: {prop.release_date}</p>
            <button className='compareButton' type='button' onClick={handleCompareClick.bind(this, prop)}>Add to Compare</button>
          </div>)}
      </div>;
};