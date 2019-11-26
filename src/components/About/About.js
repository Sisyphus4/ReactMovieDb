import React from 'react';

export const About = () => {
  return (
    <div className='about'>
      <h4>Hello, I'm Chernikov Alexander</h4>
      <p>This web-app is made in educational purposes and has no commersial value.
        It uses external API from www.themoviedb.org in order to access the movie data base
      and perform all necessary operations.</p>
      <p>
        The app supports following list of features:
      </p>
      <ul>
        <li>Displaying the most popular movies on the main page</li>
        <li>Allowing user to go to the page of the single movie with detailed description</li>
        <li>Adding 2 movies to compare list and then watching their differences on the specific page</li>
        <li>Seraching for the particular movie</li>
      </ul>
    </div>
  );
};