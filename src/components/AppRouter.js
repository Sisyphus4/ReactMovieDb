import React from "react";
import { About } from './About';
import { PopularMoviesContainer } from './PopularMovies/PopularMoviesContainer';
import { MovieContainer } from './Movie/MovieContainer';
import { ComparePageContainer } from './Compare/ComparePageContainer';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useSelector } from 'react-redux'


export const AppRouter = (props) => {
  const count = useSelector(state => state.generalReducer.comparedId.length);
  return (
    <Router>
      <div>
        <nav className='navBar'>
          <button className='navButton'>
            <Link className="link" to="/">Home</Link>
          </button>
          <button className='navButton'>
            <Link className='link' to='/Compare/'>Compare({count})</Link>
          </button>
          <button className='navButton'>
            <Link className='link' to='/about/'>About</Link>
          </button>
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
