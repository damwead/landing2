import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import SidebarModal from "./SidebarModal";

import { UserContext } from '../../lib/context';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';


const Navbar = () => {
  const { user, username } = useContext(UserContext);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.addedItems);
  const collapsed = useSelector((state) => state.collapsedState);

  const toggleNavbar = () => {
    dispatch({
      type: "COLLAPSED_STATE",
    });
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Sidebar Modal
  const toggleSidebarModal = () => {
    dispatch({
      type: "SIDEBAR_MODAL_STATE",
    });
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <Link href="/" className="navbar-brand">
                <img src="/img/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item"> {/* About */}
                    <Link
                      href="/about/"
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item"> {/* Contact */}
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                  
                  {username && (
                    <>
                      <li className="nav-item">
                        <Link href="/blog-details">
                          Write Posts
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/my-account/"
                        className={`nav-link ${currentPath == "/my-account/" && "active"}`}>
                          My Account
                        </Link>
                      </li>

                      <li>
                        <Link href={`/${username}`}>
                          <img className="nav-img" src={user?.photoURL} />
                        </Link>
                      </li>
                    </>
                  )}

                  {!username && (
                    <li className="nav-item">
                      <Link href="/my-account/"
                      className={`nav-link ${currentPath == "/my-account/" && "active"}`}>
                        Log in
                      </Link>
                    </li>
                  )}
                  
                </ul>
              </div>

              <div className="others-option">


                <div className="menu-icon">
                  <div className="burger-menu" onClick={toggleSidebarModal}>
                    <i className="flaticon-menu-button"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      <SidebarModal />
    </>
  );
};

export default Navbar;
