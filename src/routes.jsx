import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MoviesDashboard from './components/MoviesDashboard';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import MovieProfile from './components/MovieProfile';

export default (
    <Route path="/">
        <IndexRoute component={MoviesDashboard} />
        <Route path="movies/add" component={AddMovie} />
        <Route path="movies/:movieID" component={MovieProfile} />
        <Route path="movies/:movieID/edit" component={EditMovie} />
    </Route>
);