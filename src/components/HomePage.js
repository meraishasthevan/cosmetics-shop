import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-section">
      <div className="section-template">
        <div className=" carousel-section-wrapper">
          <div className="carousel-section-title">
            <p>Makeup Brush Sets</p>
          </div>
          <div className="carousel-nav-wrapper">
            <div id="square-banner-carousel" className="carousel-wrapper-outer spacing swiper">
              <div className="carousel-wrapper-inner swiper-wrapper">
                <div className="square-banner-slide-wrapper swiper-slide" style={{ width: "865px", marginRight: "20px" }}>
                  <a href="/collections/jessup" className="square-banner-slide">
                    <video
                      playsInline
                      autoPlay
                      loop
                      muted
                      className="square-banner-media"
                      poster="https://www.hokmakeup.com/cdn/shop/files/preview_images/a441b250d2494591a9af0aea9589f66d.thumbnail.0000000000.jpg?v=1723190643"
                      preload="metadata"
                      aria-label="Brush-set"
                    >
                      <source src="https://www.hokmakeup.com/cdn/shop/videos/c/vp/a441b250d2494591a9af0aea9589f66d/a441b250d2494591a9af0aea9589f66d.SD-480p-1.0Mbps-32983043.mp4?v=0" />
                      <img
                        src="https://www.hokmakeup.com/cdn/shop/files/preview_images/a441b250d2494591a9af0aea9589f66d.thumbnail.0000000000.jpg?v=1723190643"
                        alt="wait"
                      />
                    </video>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
