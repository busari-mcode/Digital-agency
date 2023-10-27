import React from 'react'
import '../../styles/services.css'

const Services = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="services__top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Save time managing your business with</h2>
                <h2 className="highlight">our best services</h2>
            </div>

            <div className="service__item-wrapper">
                <div className="services__item">
                    <span className="service__icon"><i className="ri-apps-line">
                    </i></span>
                    <h3 className="service__title">App Development</h3>
                    <p className="description">Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Quos fugit natus omnis dolore sequi ex 
                    modi aut odio culpa saepe?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services