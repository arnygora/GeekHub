// TODO: to fix problem with variable in Header
// TODO: to fix problem with connect JQUERY in index.html, do with import

import React from 'react';
import Header from './Header';
import Testimonials from './Testimonials';
import Footer from './Footer';

class App extends React.Component {

    render() {
        const article = '<h3>title</h3>';

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

// import Header from './Header';
//
// const hero = [
//     <div className="hero upper-text">
//         <p>we are leading consulting company</p>
//         <h2>choose your industry</h2>
//         <ul className="servises">
//             <li><span className="fa fa-book fa-4x" ></span><p className="upper-text">education</p></li>
//             <li><span className="fa fa-briefcase fa-4x"></span><p className="upper-text">business</p></li>
//             <li><span className="fa fa-laptop fa-4x"></span><p className="upper-text">technology</p></li>
//             <li><span className="fa fa-money fa-4x"></span><p className="upper-text">banking</p></li>
//         </ul>
//     </div> ];
//
// <Header>
//     {hero}
// </Header>

