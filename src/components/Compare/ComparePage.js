import React, { useEffect, useState } from 'react';
import {  Redirect } from "react-router-dom";


export const ComparePage = props => {
  const imgsrc = 'https://image.tmdb.org/t/p/w185/';
  const [moviesToCompare, setMovie] = useState([]);

  const handleClearClick = () => {
    props.clear(); //Empty comparedId array
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

  if (!!moviesToCompare && moviesToCompare.length > 0) {
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
            <img src={imgsrc + movie.poster_path} />
            <p>{movie.release_date}</p>
            <p>{movie.budget.toLocaleString()}</p>
            <p>{movie.popularity}</p>
          </div>)}
      </div>
    )
  }
  else return (
    <div>
      <Redirect to="/" />
    </div>
  )
};
