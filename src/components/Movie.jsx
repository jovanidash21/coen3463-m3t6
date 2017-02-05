import React, { Component, PropTypes } from 'react';

const Movie = ({movie}) => {
    return (
        <div className="col-md-2 col-sm-3 col-xs-6">
            <div className="thumbnail no-margin-bottom">
                <a href="#" className="thumbnail">
                    <img src={movie.posterImage} className="img-responsive" />
                </a>
                <div className="caption">
                    <h3 id="thumbnail-label">
                        <a href="#">
                            {movie.title}
                        </a>
                        <a href="#thumbnail-label" className="anchorjs-link">

                        </a>
                        <span className="anchorjs-icon" />
                    </h3>
                    <p>
                        {movie.year}
                    </p>
                </div>
            </div>
        </div>
    );
};

Movie.propTypes = {
    movie: PropTypes.object.isRequired
};

export default Movie;