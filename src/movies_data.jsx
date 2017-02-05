import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const App = () => {
    return (
        <Router history={browserHistory} routes={routes} />
    )
};

render(<App />, document.getElementById('movies-data'));