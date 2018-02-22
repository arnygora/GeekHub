import React from 'react';
import { Route } from 'react-router-dom';

//components
import Home from '../React_project/merkury/src/components/Home';
import Workflow from '../React_project/merkury/src/components/Workflow';
import Statistic from '../React_project/merkury/src/components/Statistic';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route exact path="/home" component={Home}/>
                <Route path="/workflow" component={Workflow}/>
                <Route path="/statistics" component={Statistic}/>
            </div>
        );
    }
}

export default Main;
