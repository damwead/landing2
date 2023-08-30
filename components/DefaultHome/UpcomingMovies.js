import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const UpcomingMovies = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="latest-trailer ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="latest-trailer-content">
                <span>Latest Trailer</span>
                <h2>Upcoming Movies By Our Production</h2>
                <p>
                  Video production work with producing video content. It is the
                  analogical of film making, but the images are digitally
                  recorded instead of film stock. There are three levels of
                  video production: production, pre-production and
                  post-production.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <Swiper
                spaceBetween={30}
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
                  768: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="latest-trailer-slider"
              >
                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <img
                      src="/img/latest-trailer/latest-trailer1.jpg"
                      alt="Image"
                    />

                    <div className="caption">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            className="play-video"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <img
                      src="/img/latest-trailer/latest-trailer2.jpg"
                      alt="Image"
                    />

                    <div className="caption">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            className="play-video"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <img
                      src="/img/latest-trailer/latest-trailer3.jpg"
                      alt="Image"
                    />

                    <div className="caption">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            className="play-video"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <img
                      src="/img/latest-trailer/latest-trailer4.jpg"
                      alt="Image"
                    />

                    <div className="caption">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            className="play-video"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <img
                      src="/img/latest-trailer/latest-trailer5.jpg"
                      alt="Image"
                    />

                    <div className="caption">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            className="play-video"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="latest-trailer-item">
                    <img
                      src="/img/latest-trailer/latest-trailer6.jpg"
                      alt="Image"
                    />

                    <div className="caption">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div
                            className="play-video"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="bx bx-play"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingMovies;
