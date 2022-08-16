//dependencies
import React from "react";
//styles
import "../Styles/AboutMeComponentStyle.css";

//assets
import coding_image from "../Assets/coding.jpg";
import studying_image from "../Assets/studying.png";

const AboutMeComponent = () => {
  return (
    <div id="about-me">
      <div className="container">
        <div style={{ width: "60%" }}>
          <p>
            A self taught programmer who is experienced the most in web
            development. Also have some experience in desktop development using
            Python and Java.
          </p>
        </div>
        <div style={{ width: "30%" }}>
          <img src={studying_image} alt="" />
        </div>
      </div>
      <div className="container">
        <div style={{ width: "30%" }}>
          <img src={coding_image} alt="" />
        </div>
        <div style={{ width: "60%" }}>
          <p>
            I started how to learn to code when I was in the senior high school
            on track of ICT major in Mobile Application and Web Design. And
            pursued the same field in my university study with a course in BS in
            Computer Science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
