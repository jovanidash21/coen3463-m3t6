import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MoviesDashboard from './components/MoviesDashboard/Index';
import AddMovie from './components/AddMovie/Index';
import EditMovie from './components/EditMovie/Index';
import MovieProfile from './components/MovieProfile/Index';

export default (
    <Route path="/">
        <IndexRoute component={MoviesDashboard} />
        <Route path="movies/add" component={AddMovie} />
        <Route path="movies/:movieID" component={MovieProfile} />
        <Route path="movies/:movieID/edit" component={EditMovie} />
    </Route>
);