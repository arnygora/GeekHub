import React from 'react';

const Footer = () => {
    return (
        <footer className="section-padding">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 col-md-4 d-flex p-0 m-auto"><img src="img/home/mainlogo.png" alt="consult plus"/></div>
                    <div className="col-12 col-md-4 industry-block">
                        <ul className="upper-text">
                            <h5>navigation</h5>
                            <li><a href="">home</a></li>
                            <li><a href="">about us</a></li>
                            <li><a href="">industry</a></li>
                            <li><a href="">services</a></li>
                            <li><a href="">pages</a></li>
                            <li><a href="">contact us</a></li>
                        </ul>
                        <ul className="upper-text">
                            <h5>industry</h5>
                            <li><a href="">education</a></li>
                            <li><a href="">business</a></li>
                            <li><a href="">real estate</a></li>
                            <li><a href="">technoloy</a></li>
                            <li><a href="">banking</a></li>
                            <li><a href="">communication</a></li>
                            <li><a href="">much more</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <h5 className="upper-text">news letter</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, praesentium!</p>
                        <form action="#">
                            <input type="email" name="mail" placeholder="email address"/>
                            <button className="btn-style">subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 p-0 bottom-foo">
                        <p>Copiright &copy; 2017 Anton Rozdobudko</p>
                        <ul className="upper-text ">
                            <li>facebook</li>
                            <li>twitter</li>
                            <li>instagram</li>
                            <li>linkedin</li>
                            <li>google+</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;