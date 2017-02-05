import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import MoviePreview from './MoviePreview';

class MoviesDashboard extends Component {
    render() {
        const { movies} = this.props;
        const { count } = this.props;

        return (
            <div>
                <div className="col-xs-12">
                    <div style={{textAlign:"right"}}>
                        <a href="/movies/add" className="btn btn-lg btn-success" role="button">
                            Add New Movie
                        </a>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <div className="title">
                                            <div className="col-sm-8">
                                                Showing {count.count} movies
                                            </div>
                                            <div className="col-sm-4" style={{textAlign:"right"}}>
                                                <div className="input-group">
                                                    <input className="form-control search-text" type="text" placeholder="Enter Movie Title" />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default search-btn" type="button">
                                                            Search
                                                        </button>
                                                    </span>
                                                </div>
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
                            movies.map(movie =>
                                <MoviePreview key={movie._id} movie={movie} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesDashboard;