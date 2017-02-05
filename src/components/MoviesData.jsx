import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation';
import Error from './Error';
import MoviesDashboard from './MoviesDashboard';

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

            return <MoviesDashboard count={count} movies={movies}/>
        }
    }
}

export default connect(() => {
    return {
        moviesCountFetch: `/api/v1/moviesData/count`,
        moviesDataFetch: `/api/v1/moviesData`
    }
})(MoviesData);