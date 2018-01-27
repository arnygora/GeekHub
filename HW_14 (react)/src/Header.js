import React from 'react';

const Header = () => {
    return (
        <div>
            <section className="welcome-section main-page">
                <div className="opacity-block">
                    <div className="hide-block">
                        <ul className="hide-list upper-text">
                            <li><a href="404.html">home</a></li>
                            <li><a href="about_us.html">about us</a></li>
                            <li><a href="blog_masonry_2.html">industry</a></li>
                            <li><a href="blog_masonry_post_2.html">services</a></li>
                            <li><a href="Career_2.html">pages</a></li>
                            <li><a href="index.html">contact us</a></li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="row">
                            <header>
                                <div className="main-logo"><h1><a href="/"><img src="img/home/mainlogo.png" alt=""/></a></h1></div>
                                <nav>
                                    <ul className="main-nav upper-text">
                                    <li><a className="active" href="/">home</a></li>
                                        <li><a href="about_us.html">about us</a></li>
                                        <li><a href="blog_masonry_2.html">industry</a></li>
                                        <li><a href="Career_2.html">services</a></li>
                                        <li><a href="blog_masonry_post_2.html">pages</a></li>
                                        <li><a href="404.html">contact us</a></li>
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
        </div>
    )
};

export default Header;

