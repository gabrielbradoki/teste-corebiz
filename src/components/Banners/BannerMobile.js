import React from 'react';
import Slider from "react-slick";
import bannerM from '../../images/Fullbaner_mobile.jpg';

const BannerMobile = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <section>
      <div className="slider slider--mobile">
      <Slider {...settings}>
        <div className="box-banner">
                <img
                    width="320"
                    height="193"
                    alt="banner 1"
                    src={bannerM}
                />
        </div>
        <div className="box-banner">
                <img
                    width="320"
                    height="193"
                    alt="banner 1"
                    src="https://via.placeholder.com/320x193/000000?text=Banner"
                />
        </div>
        <div className="box-banner">
                <img
                    width="320"
                    height="193"
                    alt="banner 2"
                    src="https://via.placeholder.com/320x193/000000?text=Banner"
                />
        </div>
        <div className="box-banner">
              <img
                  width="320"
                  height="193"
                  alt="banner 2"
                  src="https://via.placeholder.com/320x193/000000?text=Banner"
              />
      </div>
      </Slider>
      </div>
    </section>
    </>

  )
}

export default BannerMobile
