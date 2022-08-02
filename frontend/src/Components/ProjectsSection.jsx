//dependencies
import React from "react";

//assets
import ecommerce from "../Assets/ecommerce.png";
import nft_ecommerce from "../Assets/nft-ecommerce.png";
import exchange_rate from "../Assets/foreignexchange.png";

//components
import ProjectComponent from "./SubComponents/ProjectComponent";

const ProjectsSection = ({ fg, border, title }) => {
  return (
    <>
      <div id="project-body" style={{ color: fg }}>
        <div id="upper-div">
          <p>
            I did most of my self learning in programming by creating personal
            projects as pracice and learn as the project goes. Here are some of
            those.
          </p>
        </div>
        <div id="lower-div">
          <div
            className="project-container"
            style={{ border: `3px ${border} solid` }}
          >
            <ProjectComponent
              image={ecommerce}
              title={"E-Commerce Website"}
              desc={
                "This personal project is the one I created as the start of my journey in using NodeJS. The project was made of NodeJS, ExpressJS, and EJS view engine stack. It is only a frontend."
              }
              link={"https://github.com/torisutanjon/ecommerceapp"}
              linkcolor={title}
            />
          </div>
          <div
            className="project-container"
            style={{ border: `3px ${border} solid` }}
          >
            <ProjectComponent
              image={nft_ecommerce}
              title={"MERN Stack Website With NextJS"}
              desc={
                "This is a web application for NFT Publishing. I created this project to learn MERN stack and implementing it on NextJS."
              }
              link={"https://github.com/torisutanjon/nft-ecommerce"}
              linkcolor={title}
            />
          </div>
          <div
            className="project-container"
            style={{ border: `3px ${border} solid` }}
          >
            <ProjectComponent
              image={exchange_rate}
              title={"Exchange Rate Software using Java"}
              desc={
                "This is a simple desktop application that I created to refreshen my knowledge in desktop application and Java as focused on web development and Python for a long time."
              }
              link={"https://github.com/torisutanjon/exchangerate"}
              linkcolor={title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
