import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div 
        className="testimonial-area ptb-100"
        style={{
          backgroundImage: `url(/img/testimonial-bg.jpg)`,
        }}
      >
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            speed={1500}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-wrap"
          >
            <SwiperSlide>
              <div className="testimonial-content">
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.”
                </p>

                <h3>Kara Goldberg</h3>
                <span>Director of Festwork</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-content">
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.”
                </p>

                <h3>Wade Dave</h3>
                <span>Caretive Director</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-content">
                <i className="flaticon-quotation"></i>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.”
                </p>

                <h3>Seth Ivan</h3>
                <span>Movie Editor</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
