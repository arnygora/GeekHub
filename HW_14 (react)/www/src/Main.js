import React from 'react';

import { Route } from 'react-router-dom';

//components
import Home from './Home';
import About from './About';
import Masonry from './Masonry';
import Careers from './Careers';
import Posts from './Posts';
import Error from './Error';


class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/masonry" component={Masonry}/>
                <Route path="/careers" component={Careers}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/error" component={Error}/>
            </div>
        );
    }
}

export default Main;
