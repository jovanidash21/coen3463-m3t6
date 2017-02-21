import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

class MenuBar extends Component {
    render() {
        const { user } = this.props;

        return (
            <div style={{textAlign:"right"}}>
                <div className="btn-group" role="group">
                    <IndexLink to="/" className="btn btn-lg btn-primary" role="button">
                        Dashboard
                    </IndexLink>
                    {
                        user.role === "administrator"
                            ?
                            <Link to="/movies/add" className="btn btn-lg btn-success" role="button">
                                Add New Movie
                            </Link>
                            :""
                    }
                </div>
            </div>
        )
    }
}

export default MenuBar;