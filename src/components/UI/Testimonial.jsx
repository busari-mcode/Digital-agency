import React from 'react';
import '../../styles/testimonial.css';
import Slider from 'react-slick';
import ava01 from '../../images/ava-1.jpg';
import ava02 from '../../images/ava-1.jpg';
import ava03 from '../../images/ava-1.jpg';

const Testimonial = () => {
  return (
    <section>
        <div className="container">
            <div className="slider__content-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by more than <span className="highlight">5,000 customers</span></h2>
            </div>

            <div className="slider__wrapper">
                <div className="slider__item">
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Expedita molestiae facilis laboriosam est atque! Eaque sit 
                    modi repellat dolor eos, minima ipsa odio maiores error quas 
                    saepe repellendus dignissimos sequi voluptates aspernatur 
                    adipisci. Facere dolorem provident doloremque fugiat quas hic!
                </p>

                <div className="customer__details">
                    <div className="customer__img">
                        <img src={ava01} alt="" />
                    </div>

                    <div>
                        <h5 className="customer__name">Jhon Doe</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial