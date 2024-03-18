import React from "react";
import styled from "styled-components";

const HeroSectionContainer = styled.div`
  padding-left: 1rem;
`;

const TextWithIcon = ({ text = "", href }) => {
  return (
    <a href={href} className="flex gap-x-2">
      <span class="mb-0.5 font-thin text-lg  xl:text-2xl font-victorMono ">
        {text}
      </span>
      <span>▽</span>
    </a>
  );
};
const LeftHeroSection = () => {
  return (
    <HeroSectionContainer className="md:w-[30%] h-[40%] xl:w-[35%] w-full ">
      <div className="font-bold">
        {" "}
        <h1>
          The interface
          <br />
          Between the
          <br />
          Present
          <br />
          and
          <br />
          Future
        </h1>
      </div>
      <div className="border-b border-l text-xl font-medium flex flex-col gap-y-16 px-6 pb-4 w-[100%]  mt-5">
        <span className=" font-redHatText">
          Here you drift through the blogs that guide you from mechanisms to
          machines. Our ideologies are the connections between the two terminals
          of present and future. Our Perspective Papers check the posabilities
          and our Objects make them reality.
        </span>
        <span>Explore the world by upgrading yourself.</span>
      </div>
      <div className="flex flex-col text-xl w-[100%]  items-end ">
        <TextWithIcon />
        <TextWithIcon href="#objects" text={"Explore the objects"} />
        <TextWithIcon href="#pdf" text={"Improve your perception"} />
        <TextWithIcon href="#slider" text={"Learn from blogs"} />
        <TextWithIcon href="#upgrade" text={"Be involved and updated"} />
      </div>
    </HeroSectionContainer>
  );
};

export default LeftHeroSection;
