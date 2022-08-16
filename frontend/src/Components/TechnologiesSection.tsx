//dependency
import React, { useState } from "react";

//styles
import "../Styles/Projects_TechnologiesSectionStyles.css";

//component
import TechnologyComponent from "./TechnologiesComponent";

interface Technology {
  technology: {
    title: string;
    list: Array<string>;
  };
}

const TechnologiesSection = () => {
  const [technologiesOne] = useState<Technology["technology"]>({
    title: "Programming Languages",
    list: ["JAVASCRIPT", "HTML", "CSS", "JAVA", "TYPESCRIPT"],
  });

  const [technologiesTwo] = useState<Technology["technology"]>({
    title: "Softwares",
    list: ["VISUAL STUDIO CODE", "GIT BASH", "NETBEANS", "JAVA"],
  });

  const [technologiesThree] = useState<Technology["technology"]>({
    title: "Others",
    list: [
      "GITHUB",
      "NETLIFY",
      "MONGODB",
      "MERN STACK",
      "NODE PACKAGE MANAGER",
      "SQLITE",
    ],
  });

  return (
    <div id="technologies">
      <div id="title-div">
        <p>
          Here are some technologies that I am currently using and improving my
          skills on
        </p>
      </div>
      <div id="technologies-container">
        <TechnologyComponent technology={technologiesOne} />
        <TechnologyComponent technology={technologiesTwo} />
        <TechnologyComponent technology={technologiesThree} />
      </div>
    </div>
  );
};

export default TechnologiesSection;
