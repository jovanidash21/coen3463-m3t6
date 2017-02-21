import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-refetch';
import MenuBar from '../MenuBar/Index'
import moment from 'moment';

class EditMovieForm extends Component {
    constructor(props) {
        super(props);

        const { movie } = this.props;
        this.state = {value: movie.posterImage};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();

        const { movie } = this.props;
        let movieID = movie._id;
        let updateMovie = movie;
        let directors = [];
        let studios = [];
        let starring = [];
        let trailerLinks = [];
        let imageLinks = [];

        directors.push({
            director1: this.refs.director1.value,
            director2: this.refs.director2.value,
            director3: this.refs.director3.value
        });
        studios.push({
            studio1: this.refs.studio1.value,
            studio2: this.refs.studio2.value,
            studio3: this.refs.studio3.value,
            studio4: this.refs.studio4.value,
            studio5: this.refs.studio5.value,
            studio6: this.refs.studio6.value
        });
        starring.push({
            starring1: this.refs.starring1.value,
            starring2: this.refs.starring2.value,
            starring3: this.refs.starring3.value,
            starring4: this.refs.starring4.value,
            starring5: this.refs.starring5.value,
            starring6: this.refs.starring6.value,
            starring7: this.refs.starring7.value,
            starring8: this.refs.starring8.value,
            starring9: this.refs.starring9.value,
            starring10: this.refs.starring10.value,
            starring11: this.refs.starring11.value,
            starring12: this.refs.starring12.value
        });
        trailerLinks.push({
            trailerLink1: this.refs.trailerLink1.value,
            trailerLink2: this.refs.trailerLink2.value,
            trailerLink3: this.refs.trailerLink3.value
        });
        imageLinks.push({
            imageLink1: this.refs.imageLink1.value,
            imageLink2: this.refs.imageLink2.value,
            imageLink3: this.refs.imageLink3.value,
            imageLink4: this.refs.imageLink4.value
        });

        movie.title = this.refs.title.value;
        movie.directors = directors;
        movie.studios = studios;
        movie.starring = starring;
        movie.year = this.refs.year.value;
        movie.genre = this.refs.genre.value;
        movie.plot = this.refs.plot.value;
        movie.imdbLink = this.refs.imdbLink.value;
        movie.trailerLinks = trailerLinks;
        movie.imageLinks = imageLinks;
        movie.grossTicketSales = this.refs.grossTicketSales.value;

        this.props.editMovie(movieID, updateMovie);

        browserHistory.push('/');
    }

    render() {
        const { user, movie } = this.props;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-xs-12">
                        <MenuBar user={user} />
                    </div>
                    <div className="col-xs-12">
                        <div className="row no-margin-bottom">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div>
                                                    <input ref="title" type="text" className="form-control" placeholder="Movie Title *" defaultValue={movie.title} required/>
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
                                            <textarea ref="plot" className="form-control" rows="12">
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
                                                                <input ref="director1" type="text" className="form-control" placeholder="Director 1" defaultValue={director.director1}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="director2" type="text" className="form-control" placeholder="Director 2" defaultValue={director.director2}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="director3" type="text" className="form-control" placeholder="Director 3" defaultValue={director.director3}/>
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
                                                                <input ref="studio1" type="text" className="form-control" placeholder="Studio 1" defaultValue={studio.studio1}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="studio2" type="text" className="form-control" placeholder="Studio 2" defaultValue={studio.studio2}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="studio3" type="text" className="form-control" placeholder="Studio 3" defaultValue={studio.studio3}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="studio4" type="text" className="form-control" placeholder="Studio 4" defaultValue={studio.studio4}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="studio5" type="text" className="form-control" placeholder="Studio 5" defaultValue={studio.studio5}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="studio6" type="text" className="form-control" placeholder="Studio 6" defaultValue={studio.studio6}/>
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
                                                                <input ref="starring1" type="text" className="form-control" placeholder="Starring 1" defaultValue={star.starring1}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring2" type="text" className="form-control" placeholder="Starring 2" defaultValue={star.starring2}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring3" type="text" className="form-control" placeholder="Starring 3" defaultValue={star.starring3}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring4" type="text" className="form-control" placeholder="Starring 4" defaultValue={star.starring4}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring5" type="text" className="form-control" placeholder="Starring 5" defaultValue={star.starring5}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring6" type="text" className="form-control" placeholder="Starring 6" defaultValue={star.starring6}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring7" type="text" className="form-control" placeholder="Starring 7" defaultValue={star.starring7}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring8" type="text" className="form-control" placeholder="Starring 8" defaultValue={star.starring8}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring9" type="text" className="form-control" placeholder="Starring 9" defaultValue={star.starring9}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring10" type="text" className="form-control" placeholder="Starring 10" defaultValue={star.starring10}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring11" type="text" className="form-control" placeholder="Starring 11" defaultValue={star.starring11}/>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <input ref="starring12" type="text" className="form-control" placeholder="Starring 12" defaultValue={star.starring12}/>
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
                                                    <input ref="imdbLink" type="text" className="form-control" placeholder="IMDB Link (URL)" defaultValue={movie.imdbLink}/>
                                                </div>
                                                <div className="sub-title">
                                                    Trailer Link
                                                </div>
                                                {
                                                    movie.trailerLinks.map(trailerLink =>
                                                        <div>
                                                            <input ref="trailerLink1" type="text" className="form-control" placeholder="Traler 1 (URL)" defaultValue={trailerLink.trailerLink1}/>
                                                            <input ref="trailerLink2" type="text" className="form-control" placeholder="Traler 2 (URL)" defaultValue={trailerLink.trailerLink2}/>
                                                            <input ref="trailerLink3" type="text" className="form-control" placeholder="Traler 3 (URL)" defaultValue={trailerLink.trailerLink3}/>
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
                                                                <input ref="imageLink1" type="text" className="form-control" placeholder="Image 1 (URL)" defaultValue={imageLink.imageLink1}/>
                                                                {
                                                                    imageLink.imageLink1 != ""
                                                                        ?
                                                                        <p>
                                                                            <a href={imageLink.imageLink1}
                                                                               className="thumbnail" target="_blank">
                                                                                <img src={imageLink.imageLink1} className="img-responsive"/>
                                                                            </a>
                                                                        </p>
                                                                        : ""
                                                                }
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input ref="imageLink2" type="text" className="form-control" placeholder="Image 2 (URL)" defaultValue={imageLink.imageLink2}/>
                                                                {
                                                                    imageLink.imageLink2 != ""
                                                                        ?
                                                                        <p>
                                                                            <a href={imageLink.imageLink2} className="thumbnail" target="_blank">
                                                                                <img src={imageLink.imageLink2} className="img-responsive"/>
                                                                            </a>
                                                                        </p>
                                                                        : ""
                                                                }
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input ref="imageLink3" type="text" className="form-control" placeholder="Image 3 (URL)" defaultValue={imageLink.imageLink3}/>
                                                                {
                                                                    imageLink.imageLink3 != ""
                                                                        ?
                                                                        <p>
                                                                            <a href={imageLink.imageLink3} className="thumbnail" target="_blank">
                                                                                <img src={imageLink.imageLink3} className="img-responsive"/>
                                                                            </a>
                                                                        </p>
                                                                        : ""
                                                                }
                                                            </div>
                                                            <div className="col-md-3">
                                                                <input ref="imageLink4" type="text" className="form-control" placeholder="Image 4 (URL)" defaultValue={imageLink.imageLink4}/>
                                                                {
                                                                    imageLink.imageLink4 != ""
                                                                        ?
                                                                        <p>
                                                                            <a href={imageLink.imageLink4} className="thumbnail" target="_blank">
                                                                                <img src={imageLink.imageLink4} className="img-responsive"/>
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
                                                <div style={{textAlign: "right"}}>
                                                    <Link to={'/movies/' + movie._id} className="btn btn-default" role="button">
                                                        View Profile
                                                    </Link>
                                                    &nbsp;
                                                    {
                                                        user.role === "administrator" || user.role === "editor"
                                                            ?
                                                            <button className="btn btn-primary" type="submit" value="Submit">
                                                                Update
                                                            </button>
                                                            :""
                                                    }
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
                                                    <input ref="year" type="text" className="form-control" placeholder="Year" defaultValue={movie.year} required/>
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
                                                    <input ref="genre" type="text" className="form-control" placeholder="Genre" defaultValue={movie.genre}/>
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
                                                    <input ref="grossTicketSales" type="text" className="form-control" placeholder="Gross TIcket Sales (in pesos)" defaultValue={movie.grossTicketSales}/>
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
                                                    <input ref="posterImage" type="text" className="form-control" placeholder="Poster Image" value={this.state.value} onChange={this.handleChange}/>
                                                    {
                                                        movie.posterImage != ""
                                                            ?
                                                            <p>
                                                                <a href={movie.posterImage} className="thumbnail" target="_blank">
                                                                    <img src={movie.posterImage} className="img-responsive"/>
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
                </form>
            </div>
        )
    }
}

EditMovieForm.propTypes = {
    movie: PropTypes.object.isRequired
};

export default connect(() => {
    return {
        editMovie: (movieID, updateMovie) => ({
            editMovieFetch: {
                url: `/api/v1/moviesData/${movieID}`,
                method: 'PATCH',
                body: JSON.stringify(updateMovie)
            }
        })
    }
})(EditMovieForm);