import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './pages/home';
import UserPage from './pages/user';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Route exact path="/" component={HomePage} />
                    <Route path="/:username" component={UserPage} />
                </div>
            </Router>
        );
    }
}

export default App;
