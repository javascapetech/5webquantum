import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation for revolving circle
const orbitAnimation1 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(200deg) translateX(275px) rotate(0deg);
  }
  2% {
    opacity: 1;
  }
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(90deg) translateX(275px) rotate(90deg);
  }
`;

const imageAnimation1 = keyframes`
 0%{
  rotate(160deg)
 }
 100%{
  rotate(145deg)
 }
`;

const orbitAnimation2 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(200deg) translateX(350px) rotate(0deg);
  }
  2% {
    opacity: 1;
  }
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(120deg) translateX(350px) rotate(95deg);
  }
`;

const imageAnimation2 = keyframes`
0%{
 transform: rotate(160deg)
}
100%{
 transform: rotate(145deg)
}
`;

const orbitAnimation3 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(200deg) translateX(425px) rotate(0deg);
  }
  2% {
    opacity: 1;
  }
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(130deg) translateX(425px) rotate(100deg);
  }
`;

const imageAnimation3 = keyframes`
0%{
 transform: rotate(160deg)
}
100%{
 transform: rotate(130deg)
}`;

const orbitAnimation4 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(200deg) translateX(500px) rotate(0deg);
  }
  2% {
    opacity: 1;
  }
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(140deg) translateX(500px) rotate(110deg);
  }
`;

const imageAnimation4 = keyframes`
0%{
 transform: rotate(155deg)
}
100%{
 transform: rotate(115deg)
}`;

const orbitAnimation5 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(200deg) translateX(575px) rotate(0deg);
  }
  2% {
    opacity: 1;
  }
  98% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(150deg) translateX(575px) rotate(90deg);
  }
`;

const imageAnimation5 = keyframes`
0%{
 transform: rotate(160deg)
}
100%{
 transform: rotate(110deg)
}`;

// Container for the revolving circle
const RevolvingContainer = styled.a`
  position: absolute;
  width: 300px; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Outer circle (orbit)
const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  width: ${(props) => props.radius}px; /* Adjust as needed */
  height: ${(props) => props.radius}px; /* Adjust as needed */
  border-color: #fff;
  border: 6px solid;
  border-radius: 50%;
`;

// Inner circle (revolving circle)
const RevolvingCircle = styled.div`
  position: absolute;
  width: 70px; /* Adjust as needed */
  height: 70px; /* Adjust as needed */
  background-color: black; /* Adjust color as needed */
  border: 4px solid white;
  border-color: white;
  cursor: pointer;
  border-radius: 50%;
  animation: ${(props) => {
      if (props.orbitNumber === 1) {
        return orbitAnimation1;
      } else if (props.orbitNumber === 2) {
        return orbitAnimation2;
      } else if (props.orbitNumber === 3) {
        return orbitAnimation3;
      } else if (props.orbitNumber === 4) {
        return orbitAnimation4;
      } else {
        return orbitAnimation5;
      }
    }}
    ${(props) => props.time}s linear infinite;
  z-index: 100;
  transition: 0.2s all linear;

  &:hover {
    width: 85px;
    height: 85px;
    box-shadow: 0 0 20px 2px white;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RevolvingImage = styled.img`
  width: 80%;
  height: 80%;
  position: relative;
  animation: ${(props) => {
      if (props.orbitNumber === 1) {
        return imageAnimation1;
      } else if (props.orbitNumber === 2) {
        return imageAnimation2;
      } else if (props.orbitNumber === 3) {
        return imageAnimation3;
      } else if (props.orbitNumber === 4) {
        return imageAnimation4;
      } else {
        return imageAnimation5;
      }
    }}
    ${(props) => props.time}s linear infinite;
`;

const RevolvingCircleComponent = ({
  radius,
  orbitNumber,
  time,
  sourceImage,
  href
}) => {
  return (
    <RevolvingContainer href={href}>
      <Orbit radius={radius} />
      <RevolvingCircle
        style={{ border: "4px solid white" }}
        orbitNumber={orbitNumber}
        time={time}
      >
        <RevolvingImage
          orbitNumber={orbitNumber}
          src={sourceImage}
          time={time}
          loading="lazy"
        />
      </RevolvingCircle>
    </RevolvingContainer>
  );
};

export default RevolvingCircleComponent;
