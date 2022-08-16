//dependencies
import React from "react";

//styles
import "../Styles/ProjectComponentStyle.css";

interface Project {
  project: {
    image: string;
    title: string;
    description: string;
    link: string;
  };
}

const ProjectsComponent: React.FC<Project> = ({ project }) => {
  return (
    <div className="projects">
      <img src={project.image} alt="" />
      <p className="title-p">{project.title}</p>
      <div className="description-div">
        <p>{project.description}</p>
      </div>
      <br />
      <a href={project.link}>Click here to view</a>
    </div>
  );
};

export default ProjectsComponent;
