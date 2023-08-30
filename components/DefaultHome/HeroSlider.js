import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <>
      <div className="hero-slider-area">
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          speed={1500}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="hero-slider"
        >
          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/main-slider/main-slider11.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  {/* <div className="container">
                    <div className="hero-slider-text one">
                      <h1>We Make A Awesome Branded Videos</h1>
                      <p>Vivi is a high-quality video production house!</p>

                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/main-slider/main-slider12.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  {/* <div className="container">
                    <div className="hero-slider-text two">
                      <h1>We Work Globally Brilliantly Done</h1>
                      <p>Vivi is a high-quality video production house!</p>

                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slider-item"
              style={{
                backgroundImage: `url(/img/main-slider/main-slider13.jpeg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  {/* <div className="container">
                    <div className="hero-slider-text three">
                      <h1>Introducing The Next Level Of Video Production</h1>
                      <p>Vivi is a high-quality video production house!</p>

                      <div className="slider-btn">
                        <Link href="#" className="default-btn">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Social Wrap */}
        <div className="social-wrap">
          <ul>
            <li className="follow-us">Follow Us:</li>
            <li>
              <a href="https:/vk.com/" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/" target="_blank">
                <i className="bx bxl-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
