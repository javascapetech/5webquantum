import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import styled from "styled-components";
import SliderSection from "../components/SliderSection";
import PdfSection from "../components/PdfSection";
import Objects from "../components/Objects";
import ThreeDModel from "../components/ThreeDModel";
import Up from "../components/Up";
import About from "../components/About";

const NavbarPadding = styled.div`
  padding-top: 75px;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarPadding>
        <Hero />
        <Objects />
        <div className="gradient">
          <PdfSection />
          <Up />
        </div>
        <SliderSection />
        <About />
      </NavbarPadding>
    </div>
  );
};

export default Home;
