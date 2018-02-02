import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="about-us-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7 d-flex flex-column justify-content-between p-0">
                                <div className="description">
                                    <h5 className="upper-text">about us</h5>
                                    <h5 className="upper-text">вирівняти по висоті блоки з відео і формою</h5>
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Заголовок заманивший осталось ее алфавит вопроса всеми рыбного текстов океана, предупреждал наш буквенных залетают текст пунктуация переписывается, речью рекламных большой.</p>
                                </div>
                                <div className="description">
                                    <h5 className="upper-text">vision</h5>
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Большого текста, по всей имени назад буквенных взгляд то вскоре страна.</p>
                                </div>
                                <div className="description">
                                    <h5 className="upper-text">mission</h5>
                                    <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Алфавит рукописи там если не.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 description p-0">
                                <div className="about-us-video">
                                    <iframe src="https://www.youtube.com/embed/4xByu4vCJlI?list=WL" frameBorder="0" allowFullScreen title='dvsdv'></iframe>
                                </div>
                                <form action="">
                                    <h5 className="upper-text">free consultation</h5>
                                    <input type="text" name="name" placeholder="NAME" />
                                    <input type="email" name="email" placeholder="EMAIL"/>
                                    <textarea name="comment" cols="47" rows="5" placeholder="COMMENT" />
                                    <button type="submit">submit now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="card-block section-padding bg-light">
                    <div className="container">
                        <div className="row text-center d-flex justify-content-between">
                            <div className="card" style={{width: "20rem"}}>
                                <img className="card-img-top" src="img/about/team.jpg" alt="Card cap" />
                                <div className="card-block p-3">
                                    <h4 className="card-title upper-text">our team</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#0" className="btn-style upper-text">our team</a>
                                </div>
                            </div>
                            <div className="card" style={{width: "20rem"}}>
                                <img className="card-img-top" src="img/about/careers.jpg" alt="Card cap" />
                                <div className="card-block p-3">
                                    <h4 className="card-title upper-text">careers</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#0" className="btn-style upper-text">join team</a>
                                </div>
                            </div>
                            <div className="card" style={{width: "20rem"}}>
                                <img className="card-img-top" src="img/about/services.jpg" alt="Card cap" />
                                <div className="card-block p-3">
                                    <h4 className="card-title upper-text">services</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#0" className="btn-style upper-text">full services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
