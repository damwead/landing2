import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partners = () => {
  return (
    <>
      <div
        className="partner-area ptb-100"
        style={{ backgroundImage: `url(/img/partner-bg.jpg)` }}
      >
        <div className="container">
          <Swiper
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            speed={1000}
            autoplay={{
              delay: 500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-wrap"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner01.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner02.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner03.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner01.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner02.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner03.jpg" alt="Image" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
