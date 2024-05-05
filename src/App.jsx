import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./pages/footer/Footer";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import Benefit from "./pages/benefit/Benefit";
import VideoSection from "./pages/video/VideoSection";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Benefit />
      <Blog />
      <VideoSection />
      <Footer />
    </>
  );
};

export default App;
