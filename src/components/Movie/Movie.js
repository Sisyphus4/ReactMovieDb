import React, { useState, useEffect } from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

export const Movie = props => {
  const handleCompareClick = () => {   
    props.compare(props.movie);
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
    })
  }
  const id = props.match.params.id;
  useEffect(() => {
    props.getCurrentMovie(id, props.movies);
    props.getCast(id, props.storedCast);
  }, [1]);
  return !!props.movie && !!props.cast
    ? (
      <div className='theMovie'>
        <h1>{props.movie.original_title}</h1>
        <p>Genres: {props.movie.genres.map(genre => {
          return <span key={genre.id}>{genre.name + ','} </span>
        })}</p>
        <img src={'https://image.tmdb.org/t/p/w300/' + props.movie.poster_path} />
        <p>Release date: {props.movie.release_date}</p>
        <button className ='compareButton' type='button' onClick={handleCompareClick}>Add to Compare</button>
        <div className='cast'>
          <h4>Cast:</h4>
          {props.cast.cast.map(prop =>
            <p key={prop.id}>{prop.name}</p>)}
        </div>
      </div>)
    : <div>There is no movie</div>
};