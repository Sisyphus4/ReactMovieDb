import React from 'react';
import { store } from 'react-notifications-component';
import { Spinner } from '../Spinner/Spinner'
import {
  imgsrc185,
} from '../../movieDbAPI/movieDb.js';

//Here I try to use class component instead of function in order to get familiar with it

class PopularMovies extends React.Component {

  handleMovieClick(movie) {
    this.props.history.push('./movie/' + movie.id); // send us to movie page
  }

  handleCompareClick(arg, e) {
    e.stopPropagation(); // this is needed in order not to go to the movie page
    this.props.setComparedId(arg.id);
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

  handleDeleteClick (id, e) {
    e.stopPropagation();
    this.props.removeComparedMovie(id);
  }

  componentDidMount() {
    this.props.showMovies();
  }

  render() {
    return this.props.loading
      ? <Spinner />
      : !this.props.movies || this.props.movies.length === 0
        ? <div>
          {this.props.error}
        </div>
        : <div className='PopularMovies'>
          <h1>The most popular recent moveis</h1>
          {this.props.movies.map(movie => {
            const imgsrc = imgsrc185 + movie.poster_path;
            return <div key={movie.id} className='OneOfMovies'>
              <h2 onClick={(e) => this.handleMovieClick(movie, e)}>{movie.original_title}</h2>
              <img src={imgsrc} onClick={(e) => this.handleMovieClick(movie, e)} />
              <p>Release date: {movie.release_date}</p>
              {!(this.props.comparedId && this.props.comparedId.some((elem) => elem === movie.id))
              ? <button className='OneOfMovies-CompareButton' type='button' 
              onClick={(e) => this.handleCompareClick(movie, e)}>Add to Compare</button>
              : <button className='OneOfMovies-CompareButton' type='button' 
              onClick={(e) => this.handleDeleteClick(movie.id, e)}>Remove from Compare</button>
              }
            </div>
          })}
        </div>;
  }
}

export default PopularMovies;