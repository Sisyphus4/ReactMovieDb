import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import { MovieToCompare } from './MovieToCompare';
import { useHistory } from "react-router-dom";

export const ComparePage = props => {
  const [moviesToCompare, setMovie] = useState([]);

  let history = useHistory();

  const handleMovieClick = (movie) => {
    history.push('.././movie/' + movie.id); //send us to movie page
  };

  const handleDeleteClick = (id,e) => {
    e.stopPropagation();
    props.removeComparedMovie(id);
    setMovie([]);
  };

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
          <div key={movie.id} className='oneOfComparedMovies' onClick={() => handleMovieClick(movie)}>
            <MovieToCompare movie={movie} />
            <button className='compareButton' type='button' onClick={(e) => handleDeleteClick(movie.id, e)}>Remove</button>
          </div>)}
      </div>
    )
  }
  else return (
    <Redirect to="/" />
  )
};
