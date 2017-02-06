import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation';
import Error from './Error';
import MoviesDashboard from './MoviesDashboard';

class MoviesData extends Component {
    render() {
        const { moviesDataFetch } = this.props;
        const allMoviesDataFetch = PromiseState.all([moviesDataFetch]);

        if (allMoviesDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (allMoviesDataFetch.rejected) {
            return <Error error={allMoviesDataFetch.reason} />
        }
        else if (allMoviesDataFetch.fulfilled) {
            const [movies] = allMoviesDataFetch.value;

            return <MoviesDashboard movies={movies}/>
        }
    }
}

export default connect(() => {
    return {
        moviesDataFetch: `/api/v1/moviesData?sort=createdAt`
    }
})(MoviesData);