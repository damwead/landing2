import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="sidebar-wrap">
        <div className="search-wrap sidebar-widget">
          <form className="search-form">
            <input
              className="form-control"
              name="search"
              placeholder="SEARCH"
              type="text"
            />
            <button className="search-button" type="submit">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>

        <div className="popular-post-wrap sidebar-widget">
          <h3>Popular Post</h3>
          <ul>
            <li>
              <Link href="/blog-details">
                <img src="/img/blog-details/popular-img-1.jpg" alt="Image" />
                <h3>Tattoo life</h3>
                <span>June 27, 2020</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <img src="/img/blog-details/popular-img-2.jpg" alt="Image" />
                <h3>Human faith</h3>
                <span>June 26, 2020</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-details">
                <img src="/img/blog-details/popular-img-3.jpg" alt="Image" />
                <h3>Alone journey</h3>
                <span>June 26, 2020</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="categories-wrap sidebar-widget">
          <h3>Categories</h3>

          <ul>
            <li>
              <Link href="/blog-grid">Upcoming movies</Link>
            </li>
            <li>
              <Link href="/blog-grid">Blockbusters</Link>
            </li>
            <li>
              <Link href="/blog-grid">Awarded</Link>
            </li>
            <li>
              <Link href="/blog-grid">Festival</Link>
            </li>
            <li>
              <Link href="/blog-grid">Trailer</Link>
            </li>
            <li>
              <Link href="/blog-grid">Actors</Link>
            </li>
            <li>
              <Link href="/blog-grid">Film</Link>
            </li>
            <li>
              <Link href="/blog-grid">Video</Link>
            </li>
          </ul>
        </div>

        <div className="about-wrap sidebar-widget">
          <h3>About</h3>
          <img src="/img/about-img2.jpg" alt="Image" />
          <p>
            We're a London based video production comp-any that aims to inspire
            you through stories about people who defy the times we live.
          </p>
        </div>

        <div className="tags-wrap sidebar-widget">
          <h3>Tags</h3>

          <ul>
            <li>
              <Link href="/blog-grid">Actor</Link>
            </li>
            <li>
              <Link href="/blog-grid">Film Production</Link>
            </li>
            <li>
              <Link href="/blog-grid">Cinema</Link>
            </li>
            <li>
              <Link href="/blog-grid">Movie</Link>
            </li>
            <li>
              <Link href="/blog-grid">Director</Link>
            </li>
            <li>
              <Link href="/blog-grid">Entertainment</Link>
            </li>
            <li>
              <Link href="/blog-grid">Awarded</Link>
            </li>
            <li>
              <Link href="/blog-grid">Production</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
