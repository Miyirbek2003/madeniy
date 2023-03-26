import "aos/dist/aos.css";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./galery.css";
export default function Galery() {
  const { galery } = useSelector((state) => state.newSlice);
  const [isOpened, setIsOpened] = React.useState(false);
  if (isOpened) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <section className="gallery">
      {isOpened ? (
        <div className="full">
          <div className="exit" onClick={() => setIsOpened(false)}>
            &times;
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {galery?.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={`https://admin.qr-madeniymiyras.uz/${item.image}`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="gallery-inner">
          <div className="title">
            Fotogalereya{" "}
            <a className="see-all" onClick={() => setIsOpened(true)}>
              Barchasini ko'rish{" "}
              <span>
                {" "}
                <BsArrowRight />
              </span>{" "}
            </a>{" "}
          </div>
          <div className="gallery-items">
            {galery?.map((item) => (
              <div
                onClick={() => {
                  setIsOpened(true);
                }}
                className="gallery-item"
                key={item.id}
              >
                <img
                  src={`https://admin.qr-madeniymiyras.uz/${item.image}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
