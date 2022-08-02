//dependencies
import React from "react";

//subcomponent
import TechnologiesComponent from "./SubComponents/TechnologiesComponent";

const TechnologiesSection = ({ fg, border, title }) => {
  return (
    <div id="technologies-body" style={{ color: fg }}>
      <div id="main-body">
        <p style={{ fontSize: "22px" }}>
          Here are some technologies that I am currently using and improving my
          skills on
        </p>
        <div id="technologies-container">
          <div
            className="technologies-div"
            style={{ border: `4PX ${border} solid` }}
          >
            <TechnologiesComponent
              title={"Programming Languages"}
              list={["JAVASCRIPT", "HTML", "CSS", "JAVA"]}
              titlecolor={title}
            />
          </div>
          <div
            className="technologies-div"
            style={{ border: `4PX ${border} solid` }}
          >
            <TechnologiesComponent
              title={"Softwares"}
              list={["VISUAL STUDIO CODE", "GIT BASH", "NETBEANS"]}
              titlecolor={title}
            />
          </div>
          <div
            className="technologies-div"
            style={{ border: `4PX ${border} solid` }}
          >
            <TechnologiesComponent
              title={"Others"}
              list={[
                "GITHUB",
                "NETLIFY",
                "MONGODB",
                "MERN STACK",
                "NODE PACKAGE MANAGER",
                "SQLITE",
              ]}
              titlecolor={title}
            />
          </div>
        </div>
        <p style={{ fontSize: "14px" }}>
          ALL RIGHTS RESERVE &copy; TRISTAN JOHN P. GIRAO 2022
        </p>
      </div>
      <div id="footer">
        <p style={{ left: "5%", position: "relative" }}>
          Contact me: 09502099003
        </p>
        <div>
          <p>My Github Repo: </p>
          &nbsp; &nbsp;
          <a href="https://github.com/torisutanjon">
            https://github.com/torisutanjon
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
