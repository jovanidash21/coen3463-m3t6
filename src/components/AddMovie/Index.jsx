import React, { Component } from 'react';
import { connect } from 'react-refetch';
import LoadingAnimation from '../LoadingAnimation';
import Error from '../Error';
import AddMovieForm from './AddMovieForm';

class AddMovie extends Component {
    render() {
        const { userDataFetch } = this.props;

        if (userDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (userDataFetch.rejected) {
            return <Error error={userDataFetch.reason} />
        }
        else if (userDataFetch.fulfilled) {
            const [user] = userDataFetch.value;

            return (
                <AddMovieForm user={user} />
            )
        }
    }
}

export default connect(() => {
    return {
        userDataFetch: `/api/user`,
    }
})(AddMovie);