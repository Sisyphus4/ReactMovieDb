import React, { useEffect } from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { MovieCastContainer } from '../MovieCast/MovieCastContainer';
import { MovieDescription } from './MovieDescription';
import { Spinner } from '../Spinner/Spinner'

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

  const handleDeleteClick = () => {
    props.removeComparedMovie(id);
  }

  const id = parseInt(props.match.params.id, 10); // movie's id
  useEffect(() => {
    props.getMovie(id);
  });

  return props.loading
    ? <Spinner />
    : (props.movie && props.movie.id === id)
      ? (
        <div className='TheMovie'>
          <MovieDescription />
          {!(props.comparedIds && props.comparedIds.some((elem) => elem === id))
            ? <button className='TheMovie-CompareButton' type='button'
              onClick={handleCompareClick}>Add to Compare</button>
            : <button className='TheMovie-CompareButton' type='button'
              onClick={handleDeleteClick}>Remove from Compare</button>}
          <MovieCastContainer />
        </div>)
      : <div>{props.error}</div>
};