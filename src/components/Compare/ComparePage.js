import React, { useState } from 'react';
import { connect } from 'react-redux';
import { clearFunc } from '../../actions/clear';
import {getCompareContainer} from './getMoviesToCompare';

export const ComparePage = props => {
  getCompareContainer;
  if (props.moviesToCompare.length > 0) {
    return (
      <div className='comparedMovies'>
        <div>
            <h1>Title:</h1>
            <div style={{height : '46%', width:'50px'}}></div>
            <p>Release date: </p>
            <p>Budget</p>
            <p>Popularity</p>
            <button className='compareButton' onClick={props.clear}>Clear</button>
        </div>
        {props.moviesToCompare.map(prop =>
          <div key={prop.id} className='oneOfComparedMovies'>
            <h1>{prop.original_title}</h1>
            <img src={'https://image.tmdb.org/t/p/w185/' + prop.poster_path} />
            <p>{prop.release_date}</p>
            <p>{prop.budget.toLocaleString()}</p>
            <p>{prop.popularity}</p>
          </div>)}
      </div>
    )
  }
  else return (
  <div>
    <p>Add 2 Movies!</p>
  </div>
)
};
/*Тут я не делал отдельный контейнер, потому что кода мало.*/ 
const mapStateToProps = state => ({ moviesToCompare: state.generalReducer.moviesToCompare });
const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      dispatch(clearFunc());
    }
  };
};
export const ComparePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComparePage);