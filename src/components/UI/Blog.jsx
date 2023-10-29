import React from 'react';
import '../../styles/blog.css';
import videoImg from '../../images/video.png';

const Blog = () => {
  return (
    <section>
        <div className="container">
            <div className="blog__top-content">
                <h6 className="subtitle">Our blog</h6>
                <h2>
                    Let's have a look from our
                    <span className="highlight"> recent blog</span>
                </h2>
            </div>

            <div className="blog__wrapper">
                <div className="blog__item">
                    <h3>Video</h3>
                    <div className="blog__img">
                        <img src={videoImg} alt="" />
                    </div>
                    <p className="description">
                        To know about work. Watch some video f....
                    </p>
                    <div>
                        <a href="#" className="learn__more">
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog