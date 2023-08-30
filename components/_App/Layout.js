import React from "react";
import Head from "next/head";
import { ToastContainer, Slide } from "react-toastify";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Vivi - Video Production & Movie React Next Template</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />

      <ToastContainer transition={Slide} />
    </>
  );
};

export default Layout;
