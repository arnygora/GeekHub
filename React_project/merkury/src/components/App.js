import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateLayout from './components/PrivateLayout';
import Home from './components/Home';
import Workflow from './components/Workflow';
import Statistic from './components/Statistic';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateLayout exact path="/components/Workflow" component={Workflow} />
                <PrivateLayout exact path="/statistic" component={Statistic} />

                {/*<Route component={NotFound} />*/}
            </Switch>
        </Router>
    );
};

export default App;