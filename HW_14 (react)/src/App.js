import React from 'react';
import Header from './Header';
import Footer from './Footer'

class App extends React.Component {
    render() {
        return (
        <div>
            <div className="wrapper">
                <Header />
                <section className="about-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8  header">
                                <h3 className="upper-text">about us</h3>
                                <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Даже рукописи образ жаренные мир деревни за прямо но осталось запятой ipsum, путь страну подзаголовок великий она, рыбного семь не?</p>
                                <a href="#0" className="btn-style">read more</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="partners">
                                    <li><img src="img/home/logo1.png" alt="logo"/></li>
                                    <li><img src="img/home/logo2.png" alt="logo"/></li>
                                    <li><img src="img/home/logo3.png" alt="logo"/></li>
                                    <li><img src="img/home/logo4.png" alt="logo"/></li>
                                    <li><img src="img/home/logo5.png" alt="logo"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="features-section">
                        <h3 className="upper-text">our features</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-10 col-md-5 left">
                                    <ul>
                                        <li className="features-block">
                                            <div>
                                                <h5 className="upper-text">24 hour support</h5>
                                                <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Великий приставка алфавит путь путь образ.</p>
                                            </div>
                                            <div><img src="img/home/support.png" alt="support"/></div>
                                        </li>
                                        <li className="features-block">
                                            <div>
                                                <h5 className="upper-text">full security</h5>
                                                <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Которое переулка там единственное рыбного?</p>
                                            </div>
                                            <div><img src="img/home/icon-security.png" alt="security"/></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="logo"><img src="img/home/logo.png" alt="g"/></div>
                                <div className="col-12 col-md-5 right">
                                    <ul>
                                        <li className="features-block">
                                            <div><img src="img/home/bussines.png" alt="business"/></div>
                                            <div>
                                                <h5 className="upper-text">business boosting</h5>
                                                <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Путь языкового власти взгляд проектах</p>
                                            </div>
                                        </li>
                                        <li className="features-block">
                                            <div><img src="img/home/mouse.png" alt="creative"/></div>
                                            <div>
                                                <h5 className="upper-text">creative process</h5>
                                                <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Осталось грустный дороге</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 boost-block">
                                    <p>If you want to boost your business Contact us</p>
                                    <a href="#0" className="btn-style">boost your business</a>
                                </div>
                            </div>
                        </div>
                    </section>
                <section className="project-section section-padding">
                    <div className="container p-0">
                        <h3 className="upper-text">projects</h3>
                        <div className="row mb-5">
                            <div className="col-12 col-md-4">
                                <div className="banking-block"><a className="upper-text m-4" href="#0">banking</a><img src="img/home/banking.jpg" alt="banking"/>
                                    <div className="project-description">
                                        <h4 className="upper-text">project heading</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="estate-block"><a href="#0" className="upper-text m-4">business</a><img src="img/home/estate.jpg" alt="estate"/>
                                    <div className="project-description">
                                        <h4 className="upper-text">project heading</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#0" className="btn-style">full projects</a>
                    </div>
                </section>
                <section className="services-section section-padding">
                    <div className="container">
                        <h3 className="upper-text">services</h3>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src="img/home/businessConsult.png" alt="business consultation"/>
                                    <h4 className="upper-text">business consultation</h4>
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Своего ты рот диких инициал грустный рыбными, ему приставка первую сбить подпоясал</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src="img/home/rocket.png" alt="boost local business"/>
                                    <h4 className="upper-text">boost local business</h4>
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Своего ты рот диких инициал грустный рыбными, ему приставка первую сбить подпоясал</p>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src="img/home/piggy.png" alt="accounting"/>
                                    <h4 className="upper-text">accounting</h4>
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Своего ты рот диких инициал грустный рыбными, ему приставка первую сбить подпоясал</p>
                            </div>
                        </div>
                        <a href="#0" className="btn-style">full services</a>
                    </div>
                </section>
                <section className="testimonials-section section-padding">
                    <h3 className="upper-text">testimonials</h3>
                    <ul>
                        <li><img src="img/home/testimonials1.jpg" alt="sfe"/></li>
                        <li><img src="img/home/testimonials2.jpg" alt="sfe"/></li>
                        <li><img src="img/home/testimonials3.jpg" alt="sfe"/></li>
                        <div className="col-12 col-md-6 m-auto">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ea inventore quasi quo? Culpa dicta excepturi facilis fuga fugit harum maiores mollitia nam odit, quia quidem quisquam quod ullam velit!</p>
                            <p className="upper-text">john snow</p>
                            <span>Designation</span>
                        </div>
                    </ul>
                </section>
                <section className="ourBlog-section section-padding">
                    <div className="container">
                        <h3 className="upper-text">our blog</h3>
                        <div className="row">
                            <div className="col-12 col-md-6 blog-picture">
                                <div className="picture"></div>
                                <div className="blog-description">
                                    <span>February 22, 2018</span>
                                    <h5 className="upper-text">blog heading here</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus incidunt saepe sapiente. Ab aut dicta error eum eveniet ipsa laboriosam maiores nemo perferendis porro quod reprehenderit saepe, sunt totam unde.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="blog-description gradient">
                                    <span>February 22, 2018</span>
                                    <h5 className="upper-text">blog heading here</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus incidunt saepe sapiente. Ab aut dicta error eum eveniet ipsa laboriosam maiores nemo perferendis porro quod reprehenderit saepe, sunt totam unde.</p>
                                </div>
                            </div>
                        </div>
                        <a href="#0" className="btn-style">full blog</a>
                    </div>
                </section>
                <div className="container quick-contact section-padding">
                        <h3 className="upper-text">quick contact</h3>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="inner-border">
                                    <img src="img/home/email.png" alt="mail"/>
                                        <div className="">
                                            <p className="upper-text">email</p>
                                            <span>arnygora@gmail.com</span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="inner-border">
                                    <img src="img/home/callUs.png" alt="call us"/>
                                        <div className="">
                                            <p className="upper-text">call us</p>
                                            <span>+380672230841</span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="inner-border">
                                    <img src="img/home/career.png" alt="career"/>
                                        <div className="">
                                            <p className="upper-text">career</p>
                                            <span>consul@career.com</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        </div>
     );
    }
}

export default App;