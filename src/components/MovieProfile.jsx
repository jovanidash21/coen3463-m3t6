import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation';
import Error from './Error';
import MovieDetails from './MovieDetails';

class MoviesProfile extends Component {
    render() {
        const { movieDataFetch } = this.props;
        const allMovieDataFetch = PromiseState.all([movieDataFetch ]);

        if (allMovieDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (allMovieDataFetch.rejected) {
            return <Error error={allMovieDataFetch.reason} />
        }
        else if (allMovieDataFetch.fulfilled) {
            const [movie] = allMovieDataFetch.value;

            return (
                <MovieDetails movie={movie} />
            )
        }
    }
}

export default connect(props => {
    return {
        movieDataFetch: `/api/v1/moviesData/${props.params.movieID}`
    }
})(MoviesProfile);