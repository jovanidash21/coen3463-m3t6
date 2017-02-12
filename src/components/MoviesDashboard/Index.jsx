import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation';
import Error from '../Error';
import MoviesFilter from './MoviesFilter';

class MoviesDashboard extends Component {
    render() {
        const { userDataFetch, moviesDataFetch } = this.props;
        const allMoviesDataFetch = PromiseState.all([moviesDataFetch]);

        if (userDataFetch.pending || allMoviesDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected || allMoviesDataFetch.rejected) {
            return <Error error={allMoviesDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled && allMoviesDataFetch.fulfilled) {
            const [userData] = userDataFetch.value;
            const [movies] = allMoviesDataFetch.value;
            const user = userData.userData;

            return <MoviesFilter user={user} movies={movies}/>
        }
    }
}

export default connect(() => {
    return {
        userDataFetch: `/api/user`,
        moviesDataFetch: `/api/v1/moviesData?sort=createdAt`
    }
})(MoviesDashboard);