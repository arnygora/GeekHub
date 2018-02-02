import React from 'react';
import Testimonials from './Testimonials';
import Footer from './Footer';

class Careers extends React.Component {
    render() {
        return (
            <div>
                <section className="jobs-section section-padding">
                    <div className="container">
                        <h3 className="upper-text text-left">new jobs</h3>
                        <div className="row">
                            <div className="col">
                                <div className="offer-block">
                                    <p>ACCOUNT MANAGER<span className="text-secondary d-block">full time</span></p>
                                    <div className="inner-block">
                                        <p><span className="fa fa-map-pin text-success"></span> LOCATION: <span className="text-secondary">San Francisco</span></p>
                                        <p><a href="#0" className="btn-style upper-text">apply now</a></p>
                                    </div>
                                </div>
                                <div className="offer-block">
                                    <p>COMPUTER & INFORMATION SYSTEM MANAGER<span className="text-secondary d-block">full time</span></p>
                                    <div className="inner-block">
                                        <p><span className="fa fa-map-pin text-success"></span> LOCATION: <span className="text-secondary">San Francisco</span></p>
                                        <p><a href="#0" className="btn-style upper-text">apply now</a></p>
                                    </div>
                                </div>
                                <div className="offer-block">
                                    <p>SALES EXECUTIVE<span className="text-secondary d-block">full time</span></p>
                                    <div className="inner-block">
                                        <p><span className="fa fa-map-pin text-success"></span> LOCATION: <span className="text-secondary">San Francisco</span></p>
                                        <p><a href="#0" className="btn-style upper-text">apply now</a></p>
                                    </div>
                                </div>
                                <div className="offer-block">
                                    <p>EDUCATION CONSULTANT<span className="text-secondary d-block">full time</span></p>
                                    <div className="inner-block">
                                        <p><span className="fa fa-map-pin text-success"></span> LOCATION: <span className="text-secondary">San Francisco</span></p>
                                        <p><a href="/" className="btn-style upper-text">apply now</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <form className="row" action="#0">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <input  type="text" name="first name" placeholder="FIRST NAME" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <input type="text" name="last name" placeholder="LAST NAME" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <input type="email" name="email" placeholder="EMAIL" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <input type="text" name="location" placeholder="LOCATION (CITY)" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <input type="number" name="phone" placeholder="PHONE NUMBER" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <input type="text" name="resume" placeholder="RESUME" />
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <textarea name="resume" id="" cols="30" rows="10" placeholder="WRITE YOUR SELF / COPY PASTE YOUR RESUME"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn-style">submit application</button>
                            </div>
                        </form>
                    </div>
                </section>
                <div className="partners-section section-padding">
                    <div className="container">
                        <h3 className="upper-text text-center">companies we're helped</h3>
                        <span className="upper-text text-center d-block">Lorem ipsum dolor sit amet</span>
                        <div className="row">
                            <div className="col-12">
                                <ul className="partners">
                                    <li><img src="img/home/logo1.png" alt="logo" /></li>
                                    <li><img src="img/home/logo2.png" alt="logo" /></li>
                                    <li><img src="img/home/logo3.png" alt="logo" /></li>
                                    <li><img src="img/home/logo4.png" alt="logo" /></li>
                                    <li><img src="img/home/logo5.png" alt="logo" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default Careers;