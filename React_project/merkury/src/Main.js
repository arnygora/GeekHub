import React from 'react';

import { Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Workflow from "./components/Workflow";
import Statistic from "./components/Statistic";

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route path="/home" component={Home}/>
                <Route path="/workflow" component={Workflow}/>
                <Route path="/statistics" component={Statistic}/>
            </div>
        );
    }
}

export default Main;
