import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo1 from "/Quantum.png";
import logo2 from "/Automatons.png";
import logo3 from "/PP.png";
import logo4 from "/Objects.png";
import logo5 from "/Upgrade.png";

const NavbarComp = styled.div`
  width: 100vw;
  height: 75px;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: black;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const LeftNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 50%;
`;

const ToggleButton = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const LogoImageHolder = styled.div`
  margin-left: 2rem;
  // height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Heading = styled.h2`
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    color: silver
    position: relative;
    cursor: pointer;
    transition: 0.2s all linear;
    &:hover {
        text-shadow: 0px 0px 15px grey;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 3px;
        background-color: silver;
        transition: width 0.3s ease; /* Apply ease animation */
    }

    &:hover::after {
        width: 100%; /* Expand underline on hover */
    }
`;

const RightNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  flex-direction: row;
  padding-right: 2rem;
`;

const ContactBtn = styled.a`
  color: silver;
`;

const NavMenu = styled.div`
  width: 35vw;
  position: fixed;
  height: calc(100vh - 75px);
  background-color: rgb(14, 15, 15);
  color: rgb(232, 230, 227);
  top: 75px;
  transition: 0.6s all linear;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3vh;
`;

const NavItem = styled.a`
  width: 80%;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.2s all ease-in-out;
  overflow: hidden; /* Add overflow property to clip any overflow content */

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to right, #333333, 70%, #000000);
    color: rgb(199, 187, 255);
  }

  &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-bottom: 4px solid transparent;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  &:hover:before {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.3s;
  }

  &:hover:after {
    border-color: #262626;
    height: 100%;
    transform: translateX(0);
    transition: 0.3s transform linear, 0.3s height linear 0.5s;
  }
`;

const NavItemImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const NavItemHeading = styled.h4`
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const Navbar = () => {
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);

  const closeNavbar = () => {
    const myCheckbox = document.getElementById("checkbox");
    myCheckbox.checked = false;
    const navMenu = document.querySelector(".navmenu");
    navMenu.classList.remove("opened");
    navMenu.classList.add("not-opened");
  };

  return (
    <NavbarComp>
      <LeftNav>
        <ToggleButton>
          <input
            onChange={(e) => {
              const navMenu = document.querySelector(".navmenu");
              if (e.target.checked) {
                navMenu.classList.add("opened");
                navMenu.classList.remove("not-opened");
              } else {
                navMenu.classList.remove("opened");
                navMenu.classList.add("not-opened");
              }
            }}
            type="checkbox"
            id="checkbox"
            className="checkBox"
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </ToggleButton>
        <LogoImageHolder>
          <Heading
            onMouseEnter={() => {
              const headingElm = document.querySelector(".box");
              headingElm.classList.add("hovering_on_title");
            }}
            onMouseLeave={() => {
              const headingElm = document.querySelector(".box");
              headingElm.classList.remove("hovering_on_title");
            }}
            className="navheading"
          >
            5 Web Quantum
          </Heading>
        </LogoImageHolder>
      </LeftNav>
      <RightNav>
        <div></div>
        <ContactBtn href="#about">
          <span
            onMouseEnter={() => {
              const headingElm = document.querySelector(".navheading");
              headingElm.classList.add("hovering_on_box");
            }}
            onMouseLeave={() => {
              const headingElm = document.querySelector(".navheading");
              headingElm.classList.remove("hovering_on_box");
            }}
            className="box"
          >
            Contact Us
          </span>
        </ContactBtn>
      </RightNav>
      <NavMenu className="navmenu not-opened">
        <NavItem onClick={closeNavbar} href="#header">
          <NavItemImg src={logo1} />
          <NavItemHeading>Home</NavItemHeading>
        </NavItem>
        <NavItem onClick={closeNavbar} href="#objects">
          <NavItemImg src={logo4} />
          <NavItemHeading>Objects</NavItemHeading>
        </NavItem>
        <NavItem onClick={closeNavbar} href="#pdf">
          <NavItemImg src={logo3} />
          <NavItemHeading>Perspectives</NavItemHeading>
        </NavItem>
        <NavItem onClick={closeNavbar} href="#upgrade">
          <NavItemImg src={logo5} />
          <NavItemHeading>Upgrades</NavItemHeading>
        </NavItem>
        <NavItem onClick={closeNavbar} href="#slider">
          <NavItemImg src={logo2} />
          <NavItemHeading>Sources</NavItemHeading>
        </NavItem>
      </NavMenu>
    </NavbarComp>
  );
};

export default Navbar;
