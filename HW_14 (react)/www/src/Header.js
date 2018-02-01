import React from 'react';
import { Link } from 'react-router-dom';
import Main from "./Main";

const Header = () => {
        return(
           <div>
               <section className="welcome-section main-page">
                   <div className="opacity-block">
                       <div className="hide-block">
                           {/*<ul className="hide-list upper-text">*/}
                           {/*<li><Link to="/">home</Link></li>*/}
                           {/*<li><Link to="/about">about us</Link></li>*/}
                           {/*<li><Link to="/masonry">industry</Link></li>
                       {/*<li><Link to="/careers">services</Link></li>*/}
                           {/*<li><Link to="/posts">pages</Link></li>
                       {/*<li><Link to="/error">contact us</Link></li>*/}
                           {/*</ul>*/}
                           {/*<Main />*/}
                           </div>
                            <div className="container">
                               <div className="row">
                               <header>
                               <div className="main-logo"><h1><a href="/"><img src="img/home/mainlogo.png" alt=""/></a></h1></div>
                               <nav>
                               <ul className="main-nav upper-text">
                               {/*<li><Link to="/">home</Link></li>*/}
                               <li><Link to="/about">about us</Link></li>
                               <li><Link to="/masonry">industry</Link></li>
                               {/*<li><Link to="/careers">services</Link></li>
                                       <li><Link to="/posts">pages</Link></li>
                                        {/*<li><Link to="/error">contact us</Link></li>*/}
                                   <li className="text-light"><span className="fa fa-phone fa-lg"></span> +91 6598 6548 847 <span className="fa fa-envelope-open-o fa-lg"></span></li>
                                   </ul>
                                   </nav>
                                   <div id="nav-icon">
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                   </div>
                                   </header>
                                   <div className="hero upper-text">
                                   <p>we are leading consulting company</p>
                                   <h2>choose your industry</h2>
                                   <ul className="servises">
                                   <li><span className="fa fa-book fa-4x" ></span><p className="upper-text">education</p></li>
                                   <li><span className="fa fa-briefcase fa-4x"></span><p className="upper-text">business</p></li>
                                   <li><span className="fa fa-laptop fa-4x"></span><p className="upper-text">technology</p></li>
                                   <li><span className="fa fa-money fa-4x"></span><p className="upper-text">banking</p></li>
                                   </ul>
                                   </div>
                                   </div>
                                   </div>
                                   </div>
                                   </section>
                                   <Main />
           </div>

        );
};

export default Header;

