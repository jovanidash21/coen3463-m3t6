import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MoviesData from './components/MoviesData';
import MovieProfile from './components/MovieProfile';

export default (
    <Route path="/">
        <IndexRoute component={MoviesData}/>
        <Route path="movies/:movieID" component={MovieProfile} />
    </Route>
);
