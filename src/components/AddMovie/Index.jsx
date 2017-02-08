import React, { Component } from 'react';
import { IndexLink, browserHistory } from 'react-router';
import { connect } from 'react-refetch';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();

        let movie = [];
        let title = this.refs.title.value;
        let posterImage = this.state.value.length
            ? this.refs.posterImage.value
            : 'https://raw.githubusercontent.com/jovanidash21/coen3463-m3t6/master/public/images/poster_images/default.png';
        let directors = [];
        let studios = [];
        let starring = [];
        let year = this.refs.year.value;
        let genre = this.refs.genre.value;
        let plot = this.refs.plot.value;
        let imdbLink = this.refs.imdbLink.value;
        let trailerLinks = [];
        let imageLinks = [];
        let grossTicketSales = this.refs.grossTicketSales.value;

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

        movie.push({title, posterImage, directors, studios, starring, year, genre, plot, imdbLink, trailerLinks, imageLinks, grossTicketSales});
        this.props.addMovie(movie);

        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-xs-12">
                        <div style={{textAlign: "right"}}>
                            <IndexLink to="/" className="btn btn-lg btn-primary" role="button">
                                Dashboard
                            </IndexLink>
                            &nbsp;
                            <button className="btn btn-lg btn-success" type="submit" value="Submit">
                                Publish
                            </button>
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
                                                    <input ref="title" type="text" className="form-control" placeholder="Movie Title *" required />
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
                                                <textarea ref="plot" className="form-control" rows="12" />
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
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input ref="director1" type="text" className="form-control" placeholder="Director 1" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="director2" type="text" className="form-control" placeholder="Director 2" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="director3" type="text" className="form-control" placeholder="Director 3" />
                                                    </div>
                                                </div>
                                                <div className="sub-title">
                                                    Studio
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input ref="studio1" type="text" className="form-control" placeholder="Studio 1" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio2" type="text" className="form-control" placeholder="Studio 2" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio3" type="text" className="form-control" placeholder="Studio 3" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio4" type="text" className="form-control" placeholder="Studio 4" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio5" type="text" className="form-control" placeholder="Studio 5" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio6" type="text" className="form-control" placeholder="Studio 6" />
                                                    </div>
                                                </div>
                                                <div className="sub-title">
                                                    Starring
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input ref="starring1" type="text" className="form-control" placeholder="Starring 1" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring2" type="text" className="form-control" placeholder="Starring 2" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring3" type="text" className="form-control" placeholder="Starring 3" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring4" type="text" className="form-control" placeholder="Starring 4" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring5" type="text" className="form-control" placeholder="Starring 5" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring6" type="text" className="form-control" placeholder="Starring 6" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring7" type="text" className="form-control" placeholder="Starring 7"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring8" type="text" className="form-control" placeholder="Starring 8" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring9" type="text" className="form-control" placeholder="Starring 9" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring10" type="text" className="form-control" placeholder="Starring 10" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring11" type="text" className="form-control" placeholder="Starring 11" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring12" type="text" className="form-control" placeholder="Starring 12" />
                                                    </div>
                                                </div>
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
                                                    <input ref="imdbLink" type="text" className="form-control" placeholder="IMDB Link (URL)" />
                                                </div>
                                                <div className="sub-title">
                                                    Trailer Link
                                                </div>
                                                <div>
                                                    <input ref="trailerLink1" type="text" className="form-control" placeholder="Traler 1 (URL)" />
                                                    <input ref="trailerLink2" type="text" className="form-control" placeholder="Traler 2 (URL)" />
                                                    <input ref="trailerLink3" type="text" className="form-control" placeholder="Traler 3 (URL)" />
                                                </div>
                                                <div className="sub-title">
                                                    Image Gallery
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <input ref="imageLink1" type="text" className="form-control" placeholder="Image 1 (URL)" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input ref="imageLink2" type="text" className="form-control" placeholder="Image 2 (URL)" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input ref="imageLink3" type="text" className="form-control" placeholder="Image 3 (URL)" />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input ref="imageLink4" type="text" className="form-control" placeholder="Image 4 (URL)" />
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
                                                        Year&nbsp;
                                                        <span className="required">*</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div>
                                                    <input ref="year" type="text" className="form-control" placeholder="Year" required />
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
                                                    <input ref="genre" type="text" className="form-control" placeholder="Genre" />
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
                                                    <input ref="grossTicketSales" type="text" className="form-control" placeholder="Gross TIcket Sales (in pesos)" />
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
                                                    <input ref="posterImage" type="text" className="form-control" placeholder="Poster Image" value={this.state.value} onChange={this.handleChange} />
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
    };
}

export default connect((props) => {
    return {
        addMovie: (movie) => ({
            addMovieFetch: {
                url: `/api/v1/moviesData/`,
                method: 'POST',
                body: JSON.stringify(movie),
            }
        })
    }
})(AddMovie);