import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-refetch';
import MenuBar from '../MenuBar/Index'
import moment from 'moment';

class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();

        const { movie } = this.props;
        let movieID = movie._id;

        this.props.deleteMovie(movieID);

        browserHistory.push('/');
    }

    render () {
        const { user, movie } = this.props;

        return (
            <div>
                <div className="col-xs-12">
                    <MenuBar user={user} />
                </div>
                {
                    user.map(user =>
                        user.role === "administrator"
                            ?
                            <div id={movie._id} className="modal fade">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button className="close" type="button" data-dismiss="modal" aria-label="Cancel">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                <h4 className="modal-title">Delete Movie</h4>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                    <span className="text-danger">
                                        {movie.title}
                                    </span>
                                                    <span>
                                        &nbsp;will be deleted. This action cannot be undone. Are you sure you want to delete this movie?
                                    </span>
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-default" type="button" data-dismiss="modal">
                                                    Cancel
                                                </button>
                                                <button className="btn btn-danger" type="submit" value="Submit">
                                                    Yes, Delete It!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            :""
                    )
                }
                <div className="col-xs-12">
                    <div className="row">
                        <div className=".col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <div className="title">
                                            {movie.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to={'/movies/' + movie._id} className="thumbnail">
                                        <img src={movie.posterImage} className="img-responsive"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>
                                                    Year:&nbsp;
                                                </strong>
                                                {
                                                    movie.year != ""
                                                        ? movie.year
                                                        : ""
                                                }
                                            </li>
                                            <li className="list-group-item">
                                                <strong>
                                                    Genre:&nbsp;
                                                </strong>
                                                {
                                                    movie.genre != ""
                                                        ? movie.genre
                                                        : ""
                                                }
                                            </li>
                                            <li className="list-group-item">
                                                <strong>
                                                    Gross Ticket Sales:&nbsp;
                                                </strong>
                                                &#8369;
                                                {
                                                    movie.grossTicketSales != ""
                                                        ? movie.grossTicketSales
                                                        : ""
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <div className="title">
                                                    Plot / Synopsis
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                {
                                                    movie.plot != ""
                                                        ? movie.plot
                                                        : ""
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <div className="title">
                                                    Background
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="sub-title">
                                                Director
                                            </div>
                                            {
                                                movie.directors.map(director =>
                                                    <p>
                                                        {
                                                            director.director1 != ""
                                                                ? director.director1
                                                                : ""
                                                        }
                                                        {
                                                            director.director2 != ""
                                                                ? ", " + director.director2
                                                                : ""
                                                        }
                                                        {
                                                            director.director3 != ""
                                                                ? ", " + director.director3
                                                                : ""
                                                        }
                                                    </p>
                                                )
                                            }
                                            <div className="sub-title">
                                                Studio
                                            </div>
                                            {
                                                movie.studios.map(studio =>
                                                    <p>
                                                        {
                                                            studio.studio1 != ""
                                                                ? studio.studio1
                                                                : ""
                                                        }
                                                        {
                                                            studio.studio2 != ""
                                                                ? ", " + studio.studio2
                                                                : ""
                                                        }
                                                        {
                                                            studio.studio3 != ""
                                                                ? ", " + studio.studio3
                                                                : ""
                                                        }
                                                        {
                                                            studio.studio4 != ""
                                                                ? ", " + studio.studio4
                                                                : ""
                                                        }
                                                        {
                                                            studio.studio5 != ""
                                                                ? ", " + studio.studio5
                                                                : ""
                                                        }
                                                    </p>
                                                )
                                            }
                                            <div className="sub-title">
                                                Starring
                                            </div>
                                            {
                                                movie.starring.map(star =>
                                                    <p>
                                                        {
                                                            star.starring1 != ""
                                                                ? star.starring1
                                                                : ""
                                                        }
                                                        {
                                                            star.starring2 != ""
                                                                ? ", " + star.starring2
                                                                : ""
                                                        }
                                                        {
                                                            star.starring3 != ""
                                                                ? ", " + star.starring3
                                                                : ""
                                                        }
                                                        {
                                                            star.starring4 != ""
                                                                ? ", " + star.starring4
                                                                : ""
                                                        }
                                                        {
                                                            star.starring5 != ""
                                                                ? ", " + star.starring5
                                                                : ""
                                                        }
                                                        {
                                                            star.starring6 != ""
                                                                ? ", " + star.starring6
                                                                : ""
                                                        }
                                                        {
                                                            star.starring7 != ""
                                                                ? ", " + star.starring7
                                                                : ""
                                                        }
                                                        {
                                                            star.starring8 != ""
                                                                ? ", " + star.starring8
                                                                : ""
                                                        }
                                                        {
                                                            star.starring9 != ""
                                                                ? ", " + star.starring9
                                                                : ""
                                                        }
                                                        {

                                                            star.starring10 != ""
                                                                ? ", " + star.starring10
                                                                : ""
                                                        }
                                                    </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <div className="title">
                                                    Media
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="sub-title">
                                                IMDB Link
                                            </div>
                                            {
                                                movie.imdbLink != ""
                                                    ?
                                                    <p>
                                                        <a href={movie.imdbLink} target="_blank"> {movie.imdbLink} </a>
                                                    </p>
                                                    : ""
                                            }
                                            <div className="sub-title">
                                                Trailer Link
                                            </div>
                                            {
                                                movie.trailerLinks.map(trailerLink =>
                                                    <div>
                                                        {
                                                            trailerLink.trailerLink1 != ""
                                                                ?
                                                                <p>
                                                                    <a href={trailerLink.trailerLink1} target="_blank">
                                                                        {trailerLink.trailerLink1}
                                                                    </a>
                                                                </p>
                                                                : ""
                                                        }
                                                        {
                                                            trailerLink.trailerLink2 != ""
                                                                ?
                                                                <p>
                                                                    <a href={trailerLink.trailerLink2} target="_blank">
                                                                        {trailerLink.trailerLink2}
                                                                    </a>
                                                                </p>
                                                                : ""
                                                        }
                                                        {
                                                            trailerLink.trailerLink3 != ""
                                                                ?
                                                                <p>
                                                                    <a href={trailerLink.trailerLink3} target="_blank">
                                                                        {trailerLink.trailerLink3}
                                                                    </a>
                                                                </p>
                                                                : ""
                                                        }
                                                    </div>
                                                )
                                            }
                                            <div className="sub-title">
                                                Image Gallery
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    {
                                                        movie.imageLinks.map(imageLink =>
                                                            <div>
                                                                {
                                                                    imageLink.imageLink1 != ""
                                                                        ?
                                                                        <div className="col-md-6">
                                                                            <p>
                                                                                <a href={imageLink.imageLink1}
                                                                                   className="thumbnail"
                                                                                   target="_blank">
                                                                                    <img src={imageLink.imageLink1}
                                                                                         className="img-responsive"/>
                                                                                </a>
                                                                            </p>
                                                                        </div>
                                                                        : ""
                                                                }
                                                                {
                                                                    imageLink.imageLink2 != ""
                                                                        ?
                                                                        <div className="col-md-6">
                                                                            <p>
                                                                                <a href={imageLink.imageLink2}
                                                                                   className="thumbnail"
                                                                                   target="_blank">
                                                                                    <img src={imageLink.imageLink2}
                                                                                         className="img-responsive"/>
                                                                                </a>
                                                                            </p>
                                                                        </div>
                                                                        : ""
                                                                }
                                                                {
                                                                    imageLink.imageLink3 != ""
                                                                        ?
                                                                        <div className="col-md-6">
                                                                            <p>
                                                                                <a href={imageLink.imageLink3}
                                                                                   className="thumbnail"
                                                                                   target="_blank">
                                                                                    <img src={imageLink.imageLink3}
                                                                                         className="img-responsive"/>
                                                                                </a>
                                                                            </p>
                                                                        </div>
                                                                        : ""
                                                                }
                                                                {
                                                                    imageLink.imageLink4 != ""
                                                                        ?
                                                                        <div className="col-md-6">
                                                                            <p>
                                                                                <a href={imageLink.imageLink4}
                                                                                   className="thumbnail"
                                                                                   target="_blank">
                                                                                    <img src={imageLink.imageLink4}
                                                                                         className="img-responsive"/>
                                                                                </a>
                                                                            </p>
                                                                        </div>
                                                                        : ""
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                <div className="sub-title">
                                                    Publish
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div>
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        <strong>
                                                            Created:&nbsp;
                                                        </strong>
                                                        {moment(movie.createdAt).format("YYYY-MM-DD HH:mm")}
                                                    </li>
                                                    <li className="list-group-item">
                                                        <strong>
                                                            Last Updated:&nbsp;
                                                        </strong>
                                                        {moment(movie.updatedAt).format("YYYY-MM-DD HH:mm")}
                                                    </li>
                                                </ul>
                                            </div>
                                            {
                                                user.map(user =>
                                                    <div style={{textAlign: "right"}}>
                                                        {
                                                            user.role === "administrator" || user.role === "editor"
                                                                ?
                                                                <Link to={'/movies/' + movie._id + '/edit'} className="btn btn-default" role="button">
                                                                    Edit Movie
                                                                </Link>
                                                                :""
                                                        }
                                                        &nbsp;
                                                        {
                                                            user.role === "administrator"
                                                                ?
                                                                <a className="btn btn-warning" role="button" data-toggle="modal" data-target={"#" + movie._id}>
                                                                    Delete Movie
                                                                </a>
                                                                :""
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MovieDetails.propTypes = {
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
})(MovieDetails);