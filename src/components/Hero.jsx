import React from "react";
import styled from "styled-components";
import vidSrc from "../assets/videos/main.mp4";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

const Herosection = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const Hero = () => {
  return (
    <Herosection id="header">
      <VideoBackground autoPlay muted loop>
        <source
          src={vidSrc}
          type="video/mp4"
        />
      </VideoBackground>
      <Content>
        <LeftHeroSection />
        <RightHeroSection />
      </Content>
    </Herosection>
  );
};

export default Hero;
