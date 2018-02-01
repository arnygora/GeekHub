import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Posts extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <section className="section-padding blog-container">
                    <div className="container">
                        <div className="row text-left">
                            <h5 className="upper-text">blog post</h5>
                            <div className="col-12 p-0">
                                <div className="blog-post-img">
                                    <img src="img/blog/blog-team.jpg" alt="blog team" />
                                </div>
                                <div className="pl-5">
                                    <h5 className="upper-text">Lorem ipsum dolor</h5>
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Буквенных речью рот, буквоград рыбными дорогу. Пояс живет его приставка переписали, деревни прямо большой строчка семь переулка по всей? Страна, предупредила.</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center blog-description">
                                <div className="col-12 col-md-6">
                                    <img className="w-100" src="img/blog/5.jpg" alt="pic" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Маленькая залетают, свой лучше рукопись большой диких бросил страну встретил текстами всеми живет ведущими, семантика, переписывается, текста запятой страна вопрос.</p>
                                </div>
                            </div>
                            <h5 className="upper-text pb-4 pt-4">related post</h5>
                            <div className="row justify-content-center related-post">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <img src="img/blog/relatedPost1.jpg" alt="sc" />
                                    <h5 className="upper-text">blog heading here</h5>
                                    <span className="upper-text text-warning">Lorem ipsum.</span>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <img src="img/blog/relatedPost2.jpg" alt="sac" />
                                    <h5 className="upper-text">blog heading here</h5>
                                    <span className="upper-text text-warning">Lorem ipsum.</span>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <img src="img/blog/relatedPost3.jpg" alt="ac" />
                                    <h5 className="upper-text">blog heading here</h5>
                                    <span className="upper-text text-warning">Lorem ipsum.</span>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <img src="img/blog/4.jpg" alt="asc" />
                                    <h5 className="upper-text">blog heading here</h5>
                                    <span className="upper-text text-warning">Lorem ipsum.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container-fluid">
                    <div className="row blog-feedback">
                        <div className="col-12 col-md-6 blog-post-comments">
                            <div className="row justify-content-end">
                                <h5 className="col-8 upper-text">comments</h5>
                                <div className="col-12 col-lg-11 col-xl-8 d-flex flex-nowrap m-2">
                                    <div><img src="img/blog/comments1.jpg" alt="egrb" /></div>
                                    <div>
                                        <h6 className="upper-text d-inline-block">visitor name</h6><span className="btn-style text-light float-right">reply</span>
                                        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-10 col-xl-6 d-flex flex-nowrap m-2">
                                    <div><img src="img/blog/comments2.jpg" alt="egrb" /></div>
                                    <div>
                                        <h6 className="upper-text d-inline-block">visitor name</h6><span className="btn-style text-light float-right">reply</span>
                                        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Своих, свое то от всех свой!</p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-11 col-xl-8 d-flex flex-nowrap m-2">
                                    <div><img src="img/blog/comments3.jpg" alt="egrb" /></div>
                                    <div>
                                        <h6 className="upper-text d-inline-block">visitor name</h6><span className="btn-style text-light float-right">reply</span>
                                        <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 blog-post-form">
                            <form action="#0">
                                <h5 className="upper-text">leave message</h5>
                                <input type="text" name="name" placeholder="NAME"/>
                                <input type="email" name="email" placeholder="EMAIL" />
                                <textarea name="comment" cols="47" rows="10" placeholder="COMMENT"></textarea>
                                <button type="submit" className="btn-style">submit now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Posts;