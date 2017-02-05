import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation';
import MoviePreview from './MoviePreview';

class MoviesData extends Component {
    render() {
        const { moviesCountFetch } = this.props;
        const { moviesDataFetch } = this.props;
        const allMoviesCountFetch = PromiseState.all([moviesCountFetch]);
        const allMoviesDataFetch = PromiseState.all([moviesDataFetch]);

        if (allMoviesDataFetch.pending && allMoviesCountFetch.pending) {
            return <LoadingAnimation />
        }
        else if (allMoviesDataFetch.rejected && allMoviesCountFetch.rejected) {
            return <Error error={allMoviesDataFetch.reason} />
        }
        else if (allMoviesDataFetch.fulfilled && allMoviesCountFetch.fulfilled) {
            const [movies] = allMoviesDataFetch.value;
            const [count] = allMoviesCountFetch.value;
            console.log(count);

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
                                                        <input className="form-control search-text" type="text" placeholder="" />
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
}

export default connect(() => {
    return {
        moviesCountFetch: `/api/v1/moviesData/count`,
        moviesDataFetch: `/api/v1/moviesData`
    }
})(MoviesData);