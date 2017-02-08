import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import moment from 'moment';

const MovieEditForm = ({movie}) => {
    return (
        <div>
            <div className="col-xs-12">
                <div style={{textAlign:"right"}}>
                    <IndexLink to="/" className="btn btn-lg btn-primary" role="button">
                        Dashboard
                    </IndexLink>
                    &nbsp;
                    <Link to="/movies/add" className="btn btn-lg btn-success" role="button">
                        Add New Movie
                    </Link>
                </div>
            </div>
            <div className="col-xs-12">
                <div className="row no-margin-bottom">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <input name="title" type="text" className="form-control" placeholder="Movie Title *" value={movie.title} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        <textarea name="plot" className="form-control" rows="12">
                                            {movie.plot}
                                        </textarea>
                                    </div>
                                </div>
                            </div>
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
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input name="director1" type="text" className="form-control" placeholder="Director 1" value={director.director1} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="director2" type="text" className="form-control" placeholder="Director 2" value={director.director2} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="director3" type="text" className="form-control" placeholder="Director 3" value={director.director3} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className="sub-title">
                                            Studio
                                        </div>
                                        {
                                            movie.studios.map(studio =>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input name="studio1" type="text" className="form-control" placeholder="Studio 1" value={studio.studio1} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="studio2" type="text" className="form-control" placeholder="Studio 2" value={studio.studio2} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="studio3" type="text" className="form-control" placeholder="Studio 3" value={studio.studio3} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="studio4" type="text" className="form-control" placeholder="Studio 4" value={studio.studio4} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="studio5" type="text" className="form-control" placeholder="Studio 5" value={studio.studio5} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="studio6" type="text" className="form-control" placeholder="Studio 6" value={studio.studio6} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className="sub-title">
                                            Starring
                                        </div>
                                        {
                                            movie.starring.map(star =>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input name="starring1" type="text" className="form-control" placeholder="Starring 1" value={star.starring1} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring2" type="text" className="form-control" placeholder="Starring 2" value={star.starring2} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring3" type="text" className="form-control" placeholder="Starring 3" value={star.starring3} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring4" type="text" className="form-control" placeholder="Starring 4" value={star.starring4} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring5" type="text" className="form-control" placeholder="Starring 5" value={star.starring5} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring6" type="text" className="form-control" placeholder="Starring 6" value={star.starring6} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring7" type="text" className="form-control" placeholder="Starring 7" value={star.starring7} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring8" type="text" className="form-control" placeholder="Starring 8" value={star.starring8} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring9" type="text" className="form-control" placeholder="Starring 9" value={star.starring9} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring10" type="text" className="form-control" placeholder="Starring 10" value={star.starring10} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring11" type="text" className="form-control" placeholder="Starring 11" value={star.starring11} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input name="starring12" type="text" className="form-control" placeholder="Starring 12" value={star.starring12} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
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
                                            IMDB
                                        </div>
                                        <div>
                                            <input name="imdbLink" type="text" className="form-control" placeholder="IMDB Link (URL)" value={movie.imdbLink} />
                                        </div>
                                        <div className="sub-title">
                                            Trailer Link
                                        </div>
                                        {
                                            movie.trailerLinks.map(trailerLink =>
                                                <div>
                                                    <input name="trailerLink1" type="text" className="form-control" placeholder="Traler 1 (URL)" value={trailerLink.trailerLink1} />
                                                    <input name="trailerLink2" type="text" className="form-control" placeholder="Traler 2 (URL)" value={trailerLink.trailerLink2} />
                                                    <input name="trailerLink3" type="text" className="form-control" placeholder="Traler 3 (URL)" value={trailerLink.trailerLink3} />
                                                </div>
                                            )
                                        }
                                        <div className="sub-title">
                                            Image Gallery
                                        </div>
                                        {
                                            movie.imageLinks.map(imageLink =>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <input name="imageLink1" type="text" className="form-control" placeholder="Image 1 (URL)" value={imageLink.imageLink1} />
                                                        {
                                                            imageLink.imageLink1 != ""
                                                                ?
                                                                <p>
                                                                    <a href={imageLink.imageLink1} className="thumbnail" target="_blank">
                                                                        <img src={imageLink.imageLink1} className="img-responsive" />
                                                                    </a>
                                                                </p>
                                                                : ""
                                                        }
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input name="imageLink2" type="text" className="form-control" placeholder="Image 2 (URL)" value={imageLink.imageLink2} />
                                                        {
                                                            imageLink.imageLink2 != ""
                                                                ?
                                                                <p>
                                                                    <a href={imageLink.imageLink2} className="thumbnail" target="_blank">
                                                                        <img src={imageLink.imageLink2} className="img-responsive" />
                                                                    </a>
                                                                </p>
                                                                : ""
                                                        }
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input name="imageLink3" type="text" className="form-control" placeholder="Image 3 (URL)" value={imageLink.imageLink3} />
                                                        {
                                                            imageLink.imageLink3 != ""
                                                                ?
                                                                <p>
                                                                    <a href={imageLink.imageLink3} className="thumbnail" target="_blank">
                                                                        <img src={imageLink.imageLink3} className="img-responsive" />
                                                                    </a>
                                                                </p>
                                                                : ""
                                                        }
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input name="imageLink4" type="text" className="form-control" placeholder="Image 4 (URL)" value={imageLink.imageLink4} />
                                                        {
                                                            imageLink.imageLink4 != ""
                                                                ?
                                                                <p>
                                                                    <a href={imageLink.imageLink4} className="thumbnail" target="_blank">
                                                                        <img src={imageLink.imageLink4} className="img-responsive" />
                                                                    </a>
                                                                </p>
                                                                : ""
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
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
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <div className="sub-title">
                                                Year&nbsp;
                                                <span className="required">*</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <input name="year" type="text" className="form-control" placeholder="Year" value={movie.year} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <div className="sub-title">
                                                Genre
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <input name="genre" type="text" className="form-control" placeholder="Genre" value={movie.genre} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <div className="sub-title">
                                                Gross Ticket Sales
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <input name="grossTicketSales" type="text" className="form-control" placeholder="Gross TIcket Sales (in pesos)" value={movie.grossTicketSales} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">
                                            <div className="sub-title">
                                                Poster Image
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div>
                                            <input name="posterImage" type="text" className="form-control" placeholder="Poster Image" value={movie.posterImage} />
                                            {
                                                movie.posterImage != ""
                                                    ?
                                                    <p>
                                                        <a href={movie.posterImage} className="thumbnail" target="_blank">
                                                            <img src={movie.posterImage} className="img-responsive" />
                                                        </a>
                                                    </p>
                                                    : ""
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieEditForm.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieEditForm;