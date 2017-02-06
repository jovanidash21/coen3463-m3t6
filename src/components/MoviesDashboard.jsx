import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchInput, { createFilter } from 'react-search-input';
import MoviePreview from './MoviePreview';

const KEYS_TO_FILTERS = ['title', 'year'];

const MoviesDashboard = React.createClass({
    getInitialState () {
        return { searchTerm: '' }
    },

    render() {
        const { movies} = this.props;
        const filteredMovies = movies.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        return (
            <div>
                <div className="col-xs-12">
                    <div style={{textAlign:"right"}}>
                        <Link to="/movies/add" className="btn btn-lg btn-success" role="button">
                            Add New Movie
                        </Link>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <div className="title">
                                            <div className="col-sm-4">
                                                <SearchInput className="search-input" onChange={this.searchUpdated} inputClassName="form-control" placeholder="Search Movies (Title or Year)"/>
                                            </div>
                                            <div className="col-sm-8" style={{textAlign:"right"}}>
                                                Showing&nbsp;
                                                {
                                                    filteredMovies.length == "0" || filteredMovies.length == "1"
                                                        ? filteredMovies.length + " movie"
                                                        : filteredMovies.length + " movies"
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        {
                            filteredMovies.map(movie =>
                                <MoviePreview key={movie._id} movie={movie} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    },

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
});

export default MoviesDashboard;