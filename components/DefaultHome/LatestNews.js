import React from "react";

import Link from 'next/link';

export default function LatestNews({ posts, admin }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

const PostItem = () => {
  return (
    <>
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">News Feeds</span>

            <Link href={`/${post.username}/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <h2>Get The Latest News</h2>
          </div>

          <div className="row justify-content-center">

            <div className="col-lg-4 col-md-6">
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
                    Lorem ipsum dolor sit amet consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore dolore magna aliqua
                    sit amet consectetur.
                  </p>

                  <Link href="/blog-details" className="read-more">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};
