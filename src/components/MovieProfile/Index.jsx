import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation';
import Error from '../Error';
import MovieDetails from './MovieDetails';

class MovieProfile extends Component {
    render() {
        const { userDataFetch, movieDataFetch } = this.props;
        const allMovieDataFetch = PromiseState.all([movieDataFetch]);

        if (userDataFetch.pending || allMovieDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected || allMovieDataFetch.rejected) {
            return <Error error={allMovieDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled && allMovieDataFetch.fulfilled) {
            const [userData] = userDataFetch.value;
            const [movie] = allMovieDataFetch.value;
            const user = userData.userData;

            return (
                <MovieDetails user={user} movie={movie} />
            )
        }
    }
}

export default connect(props => {
    return {
        userDataFetch: `/api/user`,
        movieDataFetch: `/api/v1/moviesData/${props.params.movieID}`
    }
})(MovieProfile);