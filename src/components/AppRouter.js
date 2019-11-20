import React from "react";
import { About } from './About';
import { PopularMoviesContainer } from './PopularMovies/PopularMoviesContainer';
import { MovieContainer } from './Movie/MovieContainer';
import { ComparePageContainer } from './Compare/ComparePageContainer';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useSelector } from 'react-redux'


export const AppRouter = () => {
  const count = useSelector(state => state.generalReducer.comparedId.length);
  return (
    <Router>
      <div>
        <nav className='navBar'>
          <Link className="link" to="/">
            <button className='navButton' type='button'>Home</button>
          </Link>
          <Link className='link' to='/Compare/'>
            <button className='navButton' type='button' disabled={!count}>Compare({count})</button>
          </Link>
          <Link className='link' to='/about/'>
            <button className='navButton' type='button'>About</button>
          </Link>
        </nav>
        <Switch>
          <Route path='/' exact component={PopularMoviesContainer} />
          <Route path='/about/' component={About} />
          <Route path='/compare/' component={ComparePageContainer} />
          <Route path='/movie/:id' component={MovieContainer} />
        </Switch>
      </div>
    </Router>
  );
};
