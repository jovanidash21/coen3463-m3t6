import React from 'react';
import SearchInput, { createFilter } from 'react-search-input';
import MenuBar from '../MenuBar/Index'
import MoviePreview from './MoviePreview';

const KEYS_TO_FILTERS = ['title', 'year'];

const MoviesFilter = React.createClass({
    getInitialState () {
        return { searchTerm: '' }
    },

    render() {
        const { user, movies } = this.props;
        const filteredMovies = movies.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        return (
            <div>
                <div className="col-xs-12">
                    <MenuBar user={user} />
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
                                <MoviePreview user={user} movie={movie} />
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

export default MoviesFilter;