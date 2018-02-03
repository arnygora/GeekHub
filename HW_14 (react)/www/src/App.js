// TODO: to fix problem with variable in Header
// TODO: to fix problem with connect JQUERY in index.html, do with import

import React from 'react';
import Header from './Header';
import Testimonials from './Testimonials';
import Footer from './Footer';

class App extends React.Component {
    render() {
        const article = <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci est expedita</h3>
        return (
            <div className="App">
                {article}
                <Header>
                    {article}
                </Header>
                <Testimonials>
                    {article}
                </Testimonials>
                <Footer>
                    {article}
                </Footer>
            </div>
        );
    }
}

export default App;


