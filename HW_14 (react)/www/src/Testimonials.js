import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonials-section section-padding">
            <h3 className="upper-text">testimonials</h3>
            <ul>
                <li><img src="img/home/testimonials1.jpg" alt="sfe"/></li>
                <li><img src="img/home/testimonials2.jpg" alt="sfe"/></li>
                <li><img src="img/home/testimonials3.jpg" alt="sfe"/></li>
                <div className="col-12 col-md-6 m-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ea inventore quasi quo?
                        Culpa dicta excepturi facilis fuga fugit harum maiores mollitia nam odit, quia quidem quisquam
                        quod ullam velit!</p>
                    <p className="upper-text">john snow</p>
                    <span>Designation</span>
                </div>
            </ul>
        </section>
    )
};

export default Testimonials;