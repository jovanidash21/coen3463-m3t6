import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const MoviePreview = ({movie}) => {
    return (
        <div>
            <div className="col-md-2 col-sm-3 col-xs-6">
                <div className="thumbnail no-margin-bottom">
                    <Link to={'/movies/' + movie._id} className="thumbnail">
                        <img src={movie.posterImage} className="img-responsive" />
                    </Link>
                    <div className="caption">
                        <h3 id="thumbnail-label">
                            <Link to={'/movies/' + movie._id}>
                                {movie.title}
                            </Link>
                            <a href="#thumbnail-label" className="anchorjs-link" />
                            <span className="anchorjs-icon" />
                        </h3>
                        <p>
                            {movie.year}
                        </p>
                        <p>
                            <Link to={'/movies/' + movie._id + '/edit'} className="btn btn-primary" role="button">
                                Edit
                            </Link>
                            &nbsp;
                            <a className="btn btn-warning" role="button" data-toggle="modal" data-target={"#"+ movie._id} >
                                Delete
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div id={movie._id} className="modal fade">
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
                            <button className="btn btn-danger">
                                Yes, Delete It!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MoviePreview.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MoviePreview;