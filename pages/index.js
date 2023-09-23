import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/DefaultHome/HeroSlider";
import About from "../components/DefaultHome/About";
import VideoCreated from "../components/DefaultHome/VideoCreated";
import UpcomingMovies from "../components/DefaultHome/UpcomingMovies";
import LatestNews from "../components/DefaultHome/LatestNews";
import Partners from "../components/Common/Partners";
import Footer from "../components/_App/Footer";


const Index = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <Navbar />

      <HeroSlider />

      <About />

      <LatestNews />

      <VideoCreated />

      <UpcomingMovies />

      <Partners />

      <Footer />
    </>
  );
};

export default Index;
