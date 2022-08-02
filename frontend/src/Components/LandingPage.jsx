//dependencies
import React, { useState, useEffect } from "react";

//assets
import "../Styles/landingpage.css";

//components
import LandingSection from "./LandingSection";
import AboutMeSection from "./AboutMeSection";
import ProjectsSection from "./ProjectsSection";
import TechnologiesSection from "./TechnologiesSection";

//assets
import sun_vector from "../Assets/sun-vector.png";
import moon_vector from "../Assets/moon_vector.png";

//subcomponents
import HiddenTopNavComponent from "./SubComponents/HiddenTopNavComponent";

const LandingPage = () => {
  //state variables
  const [bg, setbg] = useState("#FFFFFF");
  const [fg, setfg] = useState("#000000");
  const [topnavcolor, settopnavcolor] = useState("#ffffff");
  const [stroke, setstroke] = useState("#000000");
  const [border, setborder] = useState("#0E1EAD");
  const [title, settitle] = useState("#1F00DC");
  const [display, setDisplay] = useState("none");

  //if scrolly === 0
  const scrollHandler = () => {
    if (window.scrollY === 0) {
      //find a way to make this not a zero
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  };

  const CheckboxHandler = (status) => {
    if (status === true) {
      setbg("#1E1E1E");
      setfg("#F2F2F2");
      settopnavcolor("#1E1E1E");
      setstroke("#EE8B17");
      setborder("#7785FF");
      settitle("#EE8B17");
    } else {
      setbg("#FFFFFF");
      setfg("#000000");
      settopnavcolor("#ffffff");
      setstroke("#000000");
      setborder("#0E1EAD");
      settitle("#1F00DC");
    }
  };

  // useeffect an addeventlistener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  return (
    <div className="main-body">
      <div id="hidden-topnav" style={{ display: display }}>
        <div id="inner-div-container">
          <div id="left-side">
            <HiddenTopNavComponent />
          </div>
          <div id="right-side">
            <img src={sun_vector} alt="" />
            <label id="toggle">
              <input
                type="checkbox"
                id="checkbox"
                onClick={(e) => {
                  CheckboxHandler(e.target.checked);
                }}
              />
              <span id="slider"></span>
            </label>
            <img src={moon_vector} alt="" />
          </div>
        </div>
      </div>
      <section style={{ background: bg }}>
        <LandingSection fg={fg} stroke={stroke} topnavcolor={topnavcolor} />
      </section>
      <section style={{ background: bg }}>
        <AboutMeSection fg={fg} />
      </section>
      <section style={{ background: bg }}>
        <ProjectsSection fg={fg} border={border} title={title} />
      </section>
      <section style={{ background: bg }}>
        <TechnologiesSection fg={fg} border={border} title={title} />
      </section>
    </div>
  );
};

export default LandingPage;
