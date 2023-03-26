import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./mainSlider.css";
import React from "react";
import { useSelector } from "react-redux/es/exports";
export default function HomeSlide({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { lang } = useSelector((state) => state.mainSlider);
  return (
    <section className="main-slider">
      <div className="main-sliderinner">
        <Slider {...settings}>
          {slides?.data?.map((data, index) => (
            <div
              className="sl"
              key={data.id}
            >
              <div className="sl-bg">
                <img loading="lazy" src={`https://admin.qr-madeniymiyras.uz/${data.image}`} alt="" />
              </div>
              <div className="slide-text">
                <div className="slide-text">
                  <div className="slide-title">
                    {data.translations[lang].title}
                  </div>
                  <div className="slide-info">
                    {data.translations[lang].description}
                  </div>
                  <button className="more">Batafsil</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
