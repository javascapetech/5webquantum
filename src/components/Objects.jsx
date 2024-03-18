import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ThreeDModel from "./ThreeDModel";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { toast } from "react-toastify";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Model = ({ name }) => {
  const { scene } = useGLTF(`/models/${name}.glb`);
  return <primitive object={scene} scale={0.05} />;
};

const ObjectsContainer = styled.div`
  width: 100vw;
  //   background: url("/images/3dObjects/obg.jpg");
  background: black;
  min-height: 50vh;
  padding-top: 3rem;
  padding-bottom: 5rem;
`;

const HeadingSection = styled.div`
  padding-left: 4rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-end;
`;

const Heading = styled.h2`
  font-size: 4rem;
  color: white;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0;
`;

const SectionSubHeading = styled.h3`
  font-size: 1rem;
  // font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: silver;
  margin-bottom: 1.25rem;
`;

const ObjectInfo = styled.div`
  padding-top: 4rem;
  padding-left: 6rem;
  display: flex;
  //   justify-content: center;
  flex-direction: column;
`;

const ObjectHeading = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

const ObjectSubHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 550;
  font-family: "Poppins", sans-serif;
`;

const ObjectDescription = styled.p`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
`;

const DescriptionHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-top: 2rem;
`;

const Line = styled.div`
  height: 20vh;
  width: 4px;
  background: grey;
  tra
`;

const ReadBlogBtn = styled.a`
  color: white;
  margin-top: 2rem;
`;

const Objects = () => {
  const objects = [
    {
      heading: "QEGO",
      subheading: "Quantum particle Electric Generator and Observer",
      description:
        "It’s main idea is to capture the light in it forever in a loop of mirrors and observe, How it behaves in a loop? How it interacts with the  it has wave-particle duality, on what circumstances it is switching the states? Can light rise the internal energies of the atoms and produce molecular energy?",
      modelName: "QM2O",
      scale: 0.025,
      fov: 45,
    },
    {
      heading: "SARA",
      subheading: "Search Analysis Research Assistant",
      description:
        "This is a robot which can help you in the Lab and serve as a research assistant. This can Scan things, Build things and can Observe them from hours to days, you can get the Thermal, Infrared and, Material data in one shot of any object it holds and, It can get hands on Nano-tech experiments to Mechanical projects driving the future here. SARA - make your R&D simple.",
      modelName: "PP4-Robo-Main-Crashed",
      scale: 0.025,
      fov: 45,
    },
    {
      heading: "PEG",
      subheading: "Pressure Electron Generator",
      description:
        "We all know that pressure is everywhere from our foot steps to atmosphere and, this device converts that pressure into electricity. We can use these in all pressure absorbing places, from footpaths to submarine surfaces. PEG - Energy production from daily actions.",
      modelName: "PEG",
      scale: 0.025,
      fov: 45,
    },
  ];
  return (
    <ObjectsContainer id="objects" className=" py-10  px-5">
      <HeadingSection>
        <Heading>Objects</Heading>
        <SectionSubHeading>from 5 web</SectionSubHeading>
      </HeadingSection>
      <Swiper
        style={{
          "--swiper-pagination-color": "#c7bbff",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        noSwiping={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="MySwiper"
        modules={[Navigation, Pagination]}
      >
        {objects.map((obj, index) => {
          return (
            <SwiperSlide key={index} id="swiperslide">
              <ObjectInfo>
                <ObjectHeading>{obj.heading}</ObjectHeading>
                <ObjectSubHeading>{obj.subheading}</ObjectSubHeading>
                <DescriptionHolder>
                  <Line />
                  <ObjectDescription>{obj.description}</ObjectDescription>
                </DescriptionHolder>
                <ReadBlogBtn>
                  <span
                    style={{
                      boxShadow: "0 0 20px 2px rgba(0, 0, 0, 1)",
                      borderRadius: "0.2rem",
                    }}
                    onClick={() => {
                      toast.warning("We are still working on it !");
                    }}
                    className="box"
                  >
                    Read more
                  </span>
                </ReadBlogBtn>
              </ObjectInfo>
              {obj.modelName !== "" && (
                <ThreeDModel
                  fov={obj.fov}
                  scale={obj.scale}
                  name={obj.modelName}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ObjectsContainer>
  );
};

export default Objects;
