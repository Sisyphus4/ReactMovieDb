import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import { MovieToCompare } from './MovieToCompare';
import { useHistory } from "react-router-dom";
import { SearchBar } from '../Search/SearchBar'


export const ComparePage = props => {
  const [moviesToCompare, setMovie] = useState([]);

  let history = useHistory();

  const handleMovieClick = (movie) => {
    history.push('.././movie/' + movie.id); // send us to movie page
  };

  const handleAddCompareClick = (movie) => {
    props.setComparedId(movie.id);
  }

  // Remove one specific movie
  const handleDeleteClick = (id, e) => {
    e.stopPropagation();
    props.removeComparedMovie(id);
    setMovie([]);
  };

  // Empty comparedId array
  const handleClearClick = () => {
    props.clearComparedMovies();
    setMovie([]); // Empty moviesToCompare
  }

  // Check out if our movies are in store otherwise download them
  useEffect(() => {
    for (let id of props.comparedId) {
      props.getMovie(id);
    }
  });

  // Getting compared movies from detailed movies

  useEffect(() => {
    for (let id of props.comparedId) {
      let tempMovie = props.detailedMovies.find((movie) => movie.id === id);
      if (tempMovie) {
        if (!moviesToCompare.some((elem) => elem.id === tempMovie.id)) {
          setMovie(moviesToCompare => {
            moviesToCompare.push(tempMovie); // provides liquidity to array
            if (moviesToCompare.length > 4)  // maximum movies kept for comparison
            moviesToCompare.shift();
            return [...moviesToCompare]
          });
        }
      }
    }
  });

  if (props.comparedId.length > 0) {
    return (
      <div className='comparedMovies'>
        <button className='ComparedMovies-ClearButton' onClick={handleClearClick}>Clear all and exit</button>
        {moviesToCompare.map(movie =>
          <div key={movie.id} className='oneOfComparedMovies' >
            <MovieToCompare movie={movie} OnMovieClick={handleMovieClick}/>
            <button className='compareButton' type='button' onClick={(e) => handleDeleteClick(movie.id, e)}>Remove</button>
          </div>)}
        <div className='oneOfComparedMovies'>
        <p>Add movie to compare list</p>
        <SearchBar OnMovieClick={handleAddCompareClick} />
        </div>
      </div>
    )
  }
  else return (
    <Redirect to="/" />
  )
};
