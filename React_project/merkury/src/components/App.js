import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateLayout from './PrivateLayout';
import Home from './Home';
import Workflow from './Workflow';
import Statistic from './Statistic';
import Calendar from './Calendar';
import Users from './Users';
import Settings from './Settings';
import AuthorizationPage from './AuthorizationPage';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateLayout exact path="/workflow" component={Workflow}/>
                    <PrivateLayout exact path="/statistics" component={Statistic}/>
                    <PrivateLayout exact path="/calendar" component={Calendar}/>
                    <PrivateLayout exact path="/users" component={Users}/>
                    <PrivateLayout exact path="/settings" component={Settings}/>

                    <Route exact path="/login" component={AuthorizationPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;