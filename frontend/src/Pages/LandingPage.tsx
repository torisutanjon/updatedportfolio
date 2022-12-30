//dependencies
import React, { useState } from "react";

//styles
import "../Styles/LandingPageStyle.css";

//components
import HomeSection from "../Components/HomeSection";
import AboutMeSection from "../Components/AboutMeSection";
import MyProjectSection from "../Components/MyProjectsSection";
import TechnologiesSection from "../Components/TechnologiesSection";

const LandingPage = () => {
  const [bgColor, setBGColor] = useState("#29CFDE");

  //storing the id's of section
  const section_array = [
    "home",
    "about-me",
    "my-projects",
    "technologies-i-use",
  ];
  //current index of the section
  let current_index = 0;

  //section update handler executed by the arraow buttons
  const arrow_update_section = (action: string) => {
    if (action === "up") {
      if (current_index > 0) {
        current_index -= 1;
      }
    } else {
      if (current_index < 3) {
        current_index += 1;
      }
    }

    topnav_update_section(section_array[current_index], current_index);
    changeBGColor(current_index);
    console.log(action);
    console.log(current_index);
    console.log(section_array[current_index]);
  };

  //section update handler executed by the top nav menus
  const topnav_update_section = (section_id: String, index: number) => {
    window.location.href = `#${section_id}`;
    current_index = index;
  };

  //underline color in the top nav menu update handler
  const changeBGColor = (index: number) => {
    setBGColor("#29CFDE");
    const href_divs = Array.from(
      document.getElementsByClassName(
        "underline-div"
      ) as HTMLCollectionOf<HTMLElement>
    );

    for (let i = 0; i < href_divs.length; i++) {
      if (i === index) {
        href_divs[i].style.background = "#29CFDE";
      } else {
        href_divs[i].style.background = "#292929";
      }
    }
  };

  return (
    <div id="body">
      <div id="left-side" style={{ width: "5%" }}>
        <div id="nav-container">
          <button
            onClick={() => {
              arrow_update_section("up");
            }}
          >
            <div id="triangle-top"></div>
          </button>
          <button
            onClick={() => {
              arrow_update_section("down");
            }}
          >
            <div id="triangle-down"></div>
          </button>
        </div>
      </div>
      <div id="right-side" style={{ width: "95%" }}>
        <div id="header">
          <div id="top-nav">
            <div
              className="href-div"
              onClick={() => {
                topnav_update_section("home", 0);
              }}
            >
              <p
                onClick={() => {
                  changeBGColor(0);
                }}
              >
                HOME
              </p>
              <div
                className="underline-div"
                style={{ background: bgColor }}
              ></div>
            </div>
            <div
              className="href-div"
              onClick={() => {
                topnav_update_section("about-me", 1);
              }}
            >
              <p
                onClick={() => {
                  changeBGColor(1);
                }}
              >
                ABOUT ME
              </p>
              <div className="underline-div"></div>
            </div>
            <div
              className="href-div"
              onClick={() => {
                topnav_update_section("my-projects", 2);
              }}
            >
              <p
                onClick={() => {
                  changeBGColor(2);
                }}
              >
                MY PROJECTS
              </p>
              <div className="underline-div"></div>
            </div>
            <div
              className="href-div"
              onClick={() => {
                topnav_update_section("technologies-i-use", 3);
              }}
            >
              <p
                onClick={() => {
                  changeBGColor(3);
                }}
              >
                TECHNOLOGIES I USE
              </p>
              <div className="underline-div"></div>
            </div>
          </div>
        </div>
        <div id="main-div">
          <section id="home">
            <HomeSection />
          </section>
          <section id="about-me">
            <AboutMeSection />
          </section>
          <section id="my-projects">
            <MyProjectSection />
          </section>
          <section id="technologies-i-use">
            <TechnologiesSection />
          </section>
        </div>
        <div id="footer">
          <p style={{ marginLeft: "2.5%" }}>Contact me: 0950209903</p>
          <p>ALL RIGHTS RESERVED &copy; TRISTAN JOHN P. GIRAO 2022</p>
          <div style={{ marginRight: "2.5%" }}>
            <p>My Github Repo:</p>
            <a href="https://github.com/torisutanjon">
              https://github.com/torisutanjon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
