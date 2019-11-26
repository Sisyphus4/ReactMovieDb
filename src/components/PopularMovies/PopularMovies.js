import React from 'react';
import { store } from 'react-notifications-component';
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

  componentDidMount() {
    this.props.showMovies();
  }

  render() {
    return !this.props.movies || this.props.movies.length === 0
      ? <div>
        There are no movies.
    </div>
      : <div className='popularMovies'>
        {this.props.movies.map(movie => {
          const imgsrc = imgsrc185 + movie.poster_path;
          return <div key={movie.id} className='oneOfMovies' onClick={(e) => this.handleMovieClick(movie, e)}>
            <h1>{movie.original_title}</h1>
            <img src={imgsrc} />
            <p>Release date: {movie.release_date}</p>
            <button className='compareButton' type='button' onClick={(e) => this.handleCompareClick(movie, e)}>Add to Compare</button>
          </div>
        })}
      </div>;
  }
}

export default PopularMovies;