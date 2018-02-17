import React from 'react';
import Header from './Header';
import Testimonials from './Testimonials';
import Footer from './Footer';

class App extends React.Component {
    render() {
        const article = <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci est expedita</h3>
        return (
            <div className="App">
                <Header>
                    {article}
                </Header>
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default App;


