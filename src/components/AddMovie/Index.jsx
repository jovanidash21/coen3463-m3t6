import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-refetch';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('A movie was submitted');
        event.preventDefault();
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
                                                    <input ref="title" type="text" className="form-control" placeholder="Movie Title *" value={this.state.value} required />
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
                                                <textarea ref="plot" className="form-control" rows="12" value={this.state.value} />
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
                                                        <input ref="director1" type="text" className="form-control" placeholder="Director 1" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="director2" type="text" className="form-control" placeholder="Director 2" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="director3" type="text" className="form-control" placeholder="Director 3" value={this.state.value} />
                                                    </div>
                                                </div>
                                                <div className="sub-title">
                                                    Studio
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input ref="studio1" type="text" className="form-control" placeholder="Studio 1" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio2" type="text" className="form-control" placeholder="Studio 2" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio3" type="text" className="form-control" placeholder="Studio 3" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio4" type="text" className="form-control" placeholder="Studio 4" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio5" type="text" className="form-control" placeholder="Studio 5" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="studio6" type="text" className="form-control" placeholder="Studio 6" value={this.state.value} />
                                                    </div>
                                                </div>
                                                <div className="sub-title">
                                                    Starring
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input ref="starring1" type="text" className="form-control" placeholder="Starring 1" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring2" type="text" className="form-control" placeholder="Starring 2" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring3" type="text" className="form-control" placeholder="Starring 3" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring4" type="text" className="form-control" placeholder="Starring 4" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring5" type="text" className="form-control" placeholder="Starring 5" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring6" type="text" className="form-control" placeholder="Starring 6" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring7" type="text" className="form-control" placeholder="Starring 7"/>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring8" type="text" className="form-control" placeholder="Starring 8" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring9" type="text" className="form-control" placeholder="Starring 9" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring10" type="text" className="form-control" placeholder="Starring 10" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring11" type="text" className="form-control" placeholder="Starring 11" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input ref="starring12" type="text" className="form-control" placeholder="Starring 12" value={this.state.value} />
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
                                                    <input ref="imdbLink" type="text" className="form-control" placeholder="IMDB Link (URL)" value={this.state.value} />
                                                </div>
                                                <div className="sub-title">
                                                    Trailer Link
                                                </div>
                                                <div>
                                                    <input ref="trailerLink1" type="text" className="form-control" placeholder="Traler 1 (URL)" value={this.state.value} />
                                                    <input ref="trailerLink2" type="text" className="form-control" placeholder="Traler 2 (URL)" value={this.state.value} />
                                                    <input ref="trailerLink3" type="text" className="form-control" placeholder="Traler 3 (URL)" value={this.state.value} />
                                                </div>
                                                <div className="sub-title">
                                                    Image Gallery
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <input ref="imageLink1" type="text" className="form-control" placeholder="Image 1 (URL)" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input ref="imageLink2" type="text" className="form-control" placeholder="Image 2 (URL)" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input ref="imageLink3" type="text" className="form-control" placeholder="Image 3 (URL)" value={this.state.value} />
                                                    </div>
                                                    <div className="col-md-3">
                                                        <input ref="imageLink4" type="text" className="form-control" placeholder="Image 4 (URL)" value={this.state.value} />
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
                                                    <input ref="year" type="text" className="form-control" placeholder="Year" value={this.state.value} required />
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
                                                    <input ref="genre" type="text" className="form-control" placeholder="Genre" value={this.state.value} />
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
                                                    <input ref="grossTicketSales" type="text" className="form-control" placeholder="Gross TIcket Sales (in pesos)" value={this.state.value} />
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
                                                    <input ref="posterImage" type="text" className="form-control" placeholder="Poster Image" value={this.state.value} />
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
        movieAdd: (movie) => ({
            movieAddFetch: {
                url: `/api/v1/moviesData/`,
                method: 'POST',
                body: JSON.stringify({
                    movie:movie
                })
            }
        })
    }
})(AddMovie);