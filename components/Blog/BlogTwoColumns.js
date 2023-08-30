import React from "react";
import Link from "next/link";

const BlogTwoColumns = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="single-blog">
            <Link href="/blog-details">
              <img src="/img/blog/blog1.jpg" alt="Image" />
            </Link>

            <div className="blog-content">
              <ul>
                <li>
                  <i className="flaticon-user"></i>
                  <Link href="#">Admin</Link>
                </li>

                <li>
                  <i className="flaticon-calendar"></i>
                  17/07/2020
                </li>
              </ul>

              <Link href="/blog-details">
                <h3>Video Production Services Your Business Must Have</h3>
              </Link>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua sit amet
                consectetur.
              </p>

              <Link href="/blog-details" className="read-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog">
            <Link href="/blog-details">
              <img src="/img/blog/blog2.jpg" alt="Image" />
            </Link>

            <div className="blog-content">
              <ul>
                <li>
                  <i className="flaticon-user"></i>
                  <Link href="#">Admin</Link>
                </li>

                <li>
                  <i className="flaticon-calendar"></i>
                  18/07/2020
                </li>
              </ul>

              <Link href="/blog-details">
                <h3>
                  Why You Need To Hire top className Video Production company
                </h3>
              </Link>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua sit amet
                consectetur.
              </p>

              <Link href="/blog-details" className="read-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog">
            <Link href="/blog-details">
              <img src="/img/blog/blog3.jpg" alt="Image" />
            </Link>

            <div className="blog-content">
              <ul>
                <li>
                  <i className="flaticon-user"></i>
                  <Link href="#">Admin</Link>
                </li>

                <li>
                  <i className="flaticon-calendar"></i>
                  19/07/2020
                </li>
              </ul>

              <Link href="/blog-details">
                <h3>Choosing A Video Location For Your Next Project</h3>
              </Link>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua sit amet
                consectetur.
              </p>

              <Link href="/blog-details" className="read-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog">
            <Link href="/blog-details">
              <img src="/img/blog/blog7.jpg" alt="Image" />
            </Link>

            <div className="blog-content">
              <ul>
                <li>
                  <i className="flaticon-user"></i>
                  <Link href="#">Admin</Link>
                </li>
                <li>
                  <i className="flaticon-calendar"></i>
                  17/07/2020
                </li>
              </ul>

              <Link href="/blog-details">
                <h3>Video Production Services Your Business Must Have</h3>
              </Link>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua sit amet
                consectetur.
              </p>

              <Link href="/blog-details" className="read-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog">
            <Link href="/blog-details">
              <img src="/img/blog/blog8.jpg" alt="Image" />
            </Link>

            <div className="blog-content">
              <ul>
                <li>
                  <i className="flaticon-user"></i>
                  <Link href="#">Admin</Link>
                </li>
                <li>
                  <i className="flaticon-calendar"></i>
                  18/07/2020
                </li>
              </ul>

              <Link href="/blog-details">
                <h3>
                  Why You Need To Hire top className Video Production company
                </h3>
              </Link>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua sit amet
                consectetur.
              </p>

              <Link href="/blog-details" className="read-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="single-blog">
            <Link href="/blog-details">
              <img src="/img/blog/blog9.jpg" alt="Image" />
            </Link>

            <div className="blog-content">
              <ul>
                <li>
                  <i className="flaticon-user"></i>
                  <Link href="#">Admin</Link>
                </li>
                <li>
                  <i className="flaticon-calendar"></i>
                  19/07/2020
                </li>
              </ul>

              <Link href="/blog-details">
                <h3>Choosing A Video Location For Your Next Project</h3>
              </Link>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua sit amet
                consectetur.
              </p>

              <Link href="/blog-details" className="read-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="pagination-area text-center">
            <Link href="/blog-details" className="prev page-numbers">
              <i className="bx bx-chevron-left"></i>
            </Link>

            <span className="page-numbers current">1</span>

            <Link href="/blog-details" className="page-numbers">
              2
            </Link>

            <Link href="/blog-details" className="page-numbers">
              3
            </Link>

            <Link href="/blog-details" className="page-numbers">
              4
            </Link>

            <Link href="/blog-details" className="next page-numbers">
              <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTwoColumns;
