import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const PortfolioCard = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="portfolio-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio1.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Action</span>
                  <h3>
                    <Link href="/portfolio-details">Fighting club</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio2.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Shooting</span>
                  <h3>
                    <Link href="/portfolio-details">
                      In the time of shooting
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio3.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Technology</span>
                  <h3>
                    <Link href="/portfolio-details">Deep Sea</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio4.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Horror</span>
                  <h3>
                    <Link href="/portfolio-details">Horror Night</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio5.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Musical</span>
                  <h3>
                    <Link href="/portfolio-details">Music Video</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio6.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Art</span>
                  <h3>
                    <Link href="/portfolio-details">Travelling World</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio7.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Studio</span>
                  <h3>
                    <Link href="/portfolio-details">Shooting Spot</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-portfolio">
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(/img/portfolio/portfolio8.jpg)`,
                  }}
                >
                  <div className="price-wrap">
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="play-video"
                    >
                      <i className="flaticon-play"></i>
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <span>Documentary</span>
                  <h3>
                    <Link href="/portfolio-details">Journey By Train</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-12 text-center">
              <Link href="#" className="default-btn">
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioCard;
