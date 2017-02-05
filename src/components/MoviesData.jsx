import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import LoadingAnimation from './LoadingAnimation';
import Movie from './Movie';

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
            console.log(movies);

            return (
                <div className="col-xs-12">
                    <div className="row">
                        {
                            movies.map(movie =>
                                <Movie key={movie._id} movie={movie} />
                            )
                        }
                    </div>
                </div>
            )
        }
    }
}

export default connect(props => {
    return {
        moviesDataFetch: `/api/v1/moviesData`
    }
})(MoviesData);