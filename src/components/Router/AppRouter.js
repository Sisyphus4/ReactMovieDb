import React from "react";
import { About } from '../About/About';
import { PopularMoviesContainer } from '../PopularMovies/PopularMoviesContainer';
import { MovieContainer } from '../Movie/MovieContainer';
import { ComparePageContainer } from '../Compare/ComparePageContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './NavBar';
import { SearchMoviePage } from '../Search/SearchMoviePage';


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route component={NavBar} />
        <Switch>
          <Route path='/' exact component={PopularMoviesContainer} />
          <Route path='/about/' component={About} />
          <Route path='/compare/' component={ComparePageContainer} />
          <Route path='/movie/:id' component={MovieContainer} />
          <Route path='/searchResults' component={SearchMoviePage} />
        </Switch>
      </div>
    </Router>
  );
};
