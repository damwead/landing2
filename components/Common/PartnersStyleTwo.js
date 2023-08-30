import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const PartnersStyleTwo = () => {
  return (
    <>
      <div className="partner-area-two ptb-100">
        <div className="container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 3,
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
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-wrap"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner7.png" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner8.png" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner9.png" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner10.png" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner11.png" alt="Image" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/img/partners/partner12.png" alt="Image" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnersStyleTwo;
