import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

import {
  imgsrc185,
} from '../../movieDbAPI/moiveDb.js';

export const ComparePage = props => {
  const [moviesToCompare, setMovie] = useState([]);

  const handleClearClick = () => {
    props.clearComparedMovies(); //Empty comparedId array
    setMovie([]); //Empty moviesToCompare
  }

  //Check out if our movies are in store otherwise download them
  useEffect(() => {
    for (let id of props.comparedId) {
      props.getMovie(id);
    }
  }, [1]);
  
  //Getting compared movies from detailed movies
  for (let movie of props.detailedMovies) {
    if (movie.id == props.comparedId[0] || movie.id == props.comparedId[1]) {
      if (moviesToCompare[0] != movie && moviesToCompare[1] != movie) {
        setMovie(moviesToCompare => [...moviesToCompare, movie]);
      }
    }
  }
  if (props.comparedId.length > 0) {
    return (
      <div className='comparedMovies'>
        <div>
          <h1>Title:</h1>
          <div className='compareDiv'></div>
          <p>Release date: </p>
          <p>Budget</p>
          <p>Popularity</p>
          <button className='compareButton' onClick={handleClearClick}>Clear</button>
        </div>
        {moviesToCompare.map(movie =>
          <div key={movie.id} className='oneOfComparedMovies'>
            <h1>{movie.original_title}</h1>
            <img src={imgsrc185 + movie.poster_path} />
            <p>{movie.release_date}</p>
            <p>{movie.budget.toLocaleString()}</p>
            <p>{movie.popularity}</p>
          </div>)}
      </div>
    )
  }
  else return (
    <Redirect to="/" />
  )
};
