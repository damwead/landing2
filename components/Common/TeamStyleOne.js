import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const TeamStyleOne = () => {
  return (
    <>
      <section className="team-area bg-color ptb-100">
        <div className="container-fluid p-0">
          <div className="section-title">
            <span>Film Makers</span>
            <h2>Meet The Team</h2>
          </div>

          <Swiper
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            speed={1500}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              414: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="team-wrap"
          >
            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <img src="/img/team/team1.jpg" alt="Image" />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
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
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Phyllis Trimble</h3>
                  <span>Director, Producer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <img src="/img/team/team2.jpg" alt="Image" />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
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
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Lorna Smith</h3>
                  <span>Movie Editor</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <img src="/img/team/team3.jpg" alt="Image" />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
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
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Eldon B. Rice</h3>
                  <span>Movie Composer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <img src="/img/team/team4.jpg" alt="Image" />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
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
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Mike Tucker</h3>
                  <span>Cinematographer</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <img src="/img/team/team5.jpg" alt="Image" />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
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
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Emma Wilson</h3>
                  <span>Movie Director</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team">
                <div className="team-img">
                  <img src="/img/team/team3.jpg" alt="Image" />

                  <ul className="social">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
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
                  </ul>
                </div>

                <div className="team-content">
                  <h3>Eldon B. Rice</h3>
                  <span>Movie Composer</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TeamStyleOne;
