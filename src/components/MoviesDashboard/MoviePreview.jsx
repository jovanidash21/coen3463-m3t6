import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-refetch';
import { Button, Modal } from 'react-bootstrap';

class MoviePreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    open() {
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
    }
    handleSubmit(event) {
        event.preventDefault();

        const { movie } = this.props;
        let movieID = movie._id;

        this.props.deleteMovie(movieID);

        window.location.reload()
    }

    render() {
        const { user, movie } = this.props;

        return (
            <div>
                <div className="col-md-2 col-sm-3 col-xs-6">
                    <div className="thumbnail no-margin-bottom">
                        <Link to={'/movies/' + movie._id} className="thumbnail">
                            <img src={movie.posterImage} className="img-responsive"/>
                        </Link>
                        <div className="caption">
                            <h3 id="thumbnail-label">
                                <Link to={'/movies/' + movie._id}>
                                    {movie.title}
                                </Link>
                                <a href="#thumbnail-label" className="anchorjs-link"/>
                                <span className="anchorjs-icon"/>
                            </h3>
                            <p>
                                {movie.year}
                            </p>
                            <p>
                                {
                                    user.role === "administrator" || user.role === "editor"
                                        ?
                                        <Link to={'/movies/' + movie._id + '/edit'} className="btn btn-primary" role="button">
                                            Edit
                                        </Link>
                                        :""
                                }
                                &nbsp;
                                {
                                    user.role === "administrator"
                                        ?
                                        <Button bsStyle="warning" onClick={this.open}>
                                            Delete
                                        </Button>
                                        :""
                                }
                            </p>
                        </div>
                    </div>
                </div>
                {
                    user.role === "administrator"
                        ?
                        <Modal show={this.state.showModal} onHide={this.close}>
                            <form onSubmit={this.handleSubmit}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Delete Movie</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>
                                        <span className="text-danger">
                                            {movie.title}
                                        </span>
                                        <span>
                                            &nbsp;will be deleted. This action cannot be undone. Are you sure you want to delete this movie?
                                        </span>
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button bsStyle="default" onClick={this.close}>
                                        Cancel
                                    </Button>
                                    <Button bsStyle="danger" type="submit" value="Submit">
                                        Yes, Delete It!
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal>
                        :""
                }
            </div>
        )
    }
}

MoviePreview.propTypes = {
    movie: PropTypes.object.isRequired
};

export default connect(() => {
    return {
        deleteMovie: (movieID) => ({
            deleteMovieFetch: {
                url: `/api/v1/moviesData/${movieID}`,
                method: 'DELETE'
            }
        })
    }
})(MoviePreview);