import React, { useState, useEffect } from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { MovieCastContainer } from '../MovieCast/MovieCastContainer'

const imgsrc = 'https://image.tmdb.org/t/p/w300/';

export const Movie = props => {
  const handleCompareClick = () => {
    props.setComparedId(id);
    store.addNotification({
      title: 'Added',
      message: 'This movie is added to compare list',
      type: 'success',                         // 'default', 'success', 'info', 'warning'
      container: 'top-center',                // where to position the notifications
      dismiss: {
        duration: 3000
      }
    })
  }
  const id = parseInt(props.match.params.id, 10); //movie's id
  useEffect(() => {
    props.getMovie(id);
  }, [1]);


  return props.movie
    ? (
      <div className='theMovie'>
        <h1>{props.movie.original_title}</h1>
        <p>Genres: {props.movie.genres.map(genre => {
          return <span key={genre.id}>{genre.name + ','} </span>
        })}</p>
        <img src={imgsrc + props.movie.poster_path} />
        <p>Release date: {props.movie.release_date}</p>
        <button className='compareButton' type='button' onClick={handleCompareClick}>Add to Compare</button>
        <MovieCastContainer />
      </div>)
    : <div>There is no movie</div>
};