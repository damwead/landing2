import React from "react";
import Link from "next/link";
import AddToCart from "../Shop/AddToCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const RelatedProducts = ({ products }) => {
  return (
    <>
      <div className="pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Related Products</h2>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            speed={1000}
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
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="related-products"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="single-shop">
                  <div className="shop-img">
                    <img src={product.image} alt="Image" />

                    <AddToCart {...product} />
                  </div>

                  <h3>
                    <Link href="/product/[id]" as={`/product/${product.id}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <span>${product.price}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
