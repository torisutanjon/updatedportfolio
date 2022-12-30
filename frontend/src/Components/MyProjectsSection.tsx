//dependencies
import React, { useState } from "react";

//style
import "../Styles/Projects_TechnologiesSectionStyles.css";
//assets
import ecommerce_image from "../Assets/ecommerce.png";
import foreignExchange_image from "../Assets/foreignexchange.png";
import nftEcommerce_image from "../Assets/nft-ecommerce.png";

//component
import ProjectComponent from "../Components/ProjectComponent";

interface Project {
  project: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
}

const ProjectsComponent = () => {
  const [projectOne] = useState<Project["project"]>({
    image: ecommerce_image,
    title: "E-Commerce Website",
    description:
      "This personal project is the one I created as the start of my journey in using NodeJS. The project was made of NodeJS, ExpressJS, and EJS view engine stack. It is only a frontend.",
    link: "https://github.com/torisutanjon/ecommerceapp",
  });
  const [projectTwo] = useState<Project["project"]>({
    image: nftEcommerce_image,
    title: "MERN Stack Website With NextJS",
    description:
      "This is a web application for NFT Publishing. I created this project to learn MERN stack and implementing it on NextJS.",
    link: "https://github.com/torisutanjon/nft-ecommerce",
  });
  const [projectThree] = useState<Project["project"]>({
    image: foreignExchange_image,
    title: "Exchange Rate Software using Java",
    description:
      "This is a simple desktop application that I created to refreshen my knowledge in desktop application and Java as I was focused on web development and Python for a long time.",
    link: "https://github.com/torisutanjon/exchangerate",
  });

  return (
    <div id="my-projects">
      <div id="title">
        <p>
          I did the most of my self-learning in programming by creating personal
          projects to practice and learn as the project goes. Here are some of
          those.
        </p>
      </div>
      <div id="container">
        <ProjectComponent project={projectOne} />
        <ProjectComponent project={projectTwo} />
        <ProjectComponent project={projectThree} />
      </div>
    </div>
  );
};

export default ProjectsComponent;
