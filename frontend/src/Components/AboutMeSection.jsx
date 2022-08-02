//dependencies
import React from "react";

//assets
import studying_img from "../Assets/studying.png";
import coding_img from "../Assets/coding.jpg";

const AboutMeSection = ({ fg }) => {
  return (
    <>
      <div id="aboutme-div" style={{ color: fg }}>
        <div>
          <div id="left-side" className="text-div">
            <p>
              A self taught programmer who is experienced the most in web
              development.Also have some experience in desktop development using
              Python and Java.{" "}
            </p>
          </div>
          <div
            id="right-side"
            className="image-div"
            style={{ justifyContent: "flex-end" }}
          >
            <img src={coding_img} alt="" />
          </div>
        </div>
        <div>
          <div
            id="left-side"
            className="image-div"
            style={{ justifyContent: "flex-start" }}
          >
            <img src={studying_img} alt="" />
          </div>
          <div id="right-side" className="text-div">
            <p>
              I started how to learn to code when I was in the senior high
              school on track of ICT major in Mobile Application and Web Design.
              And pursued the same field in my university study with a course in
              BS in Computer Science.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
