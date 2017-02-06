import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MoviesData from './components/MoviesData';
import MovieAdd from './components/MovieAdd';
import MovieProfile from './components/MovieProfile';
import MovieEdit from './components/MovieEdit';
import MovieDelete from './components/MovieDelete';

export default (
    <Route path="/">
        <IndexRoute component={MoviesData}/>
        <Route path="movies/add" component={MovieAdd} />
        <Route path="movies/:movieID" component={MovieProfile} />
        <Route path="movies/:movieID/edit" component={MovieEdit} />
        <Route path="movies/:movieID/delete" component={MovieDelete} />
    </Route>
);
