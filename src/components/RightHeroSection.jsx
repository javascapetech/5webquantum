import React from "react";
import styled, { keyframes } from "styled-components";
import RevolvingCircleComponent from "./RevolvingCircle";
import logo1 from "/Quantum.png";
import logo2 from "/Automatons.png";
import logo3 from "/PP.png";
import logo4 from "/Objects.png";
import logo5 from "/Upgrade.png";
import Logo from "../assets/5WQ.png";

const RightHeroSectionContainer = styled.div`
  width: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-20%) translateX(-5vw);
  // transform: translateX(-5vw);
`;

const LogoNucleus = styled.img`
  width: 300px;
  aspect-ratio: 1/1;
`;

const RightHeroSection = () => {
  return (
    <RightHeroSectionContainer>
      <LogoNucleus src="/Logo.png" />
      <RevolvingCircleComponent
        href="#header"
        radius={550}
        orbitNumber={1}
        time={45}
        sourceImage={logo1}
      />
      <RevolvingCircleComponent
        href="#slider"
        radius={700}
        orbitNumber={2}
        time={45}
        sourceImage={logo2}
      />
      <RevolvingCircleComponent
        href="#pdf"
        radius={850}
        orbitNumber={3}
        time={45}
        sourceImage={logo3}
      />
      <RevolvingCircleComponent
        href="#objects"
        radius={1000}
        orbitNumber={4}
        time={45}
        sourceImage={logo4}
      />
      <RevolvingCircleComponent
        href="#upgrade"
        radius={1150}
        orbitNumber={5}
        time={45}
        sourceImage={logo5}
      />
    </RightHeroSectionContainer>
  );
};

export default RightHeroSection;
