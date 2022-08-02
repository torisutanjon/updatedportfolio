import React from "react";

const ProjectComponent = ({ image, title, desc, link, linkcolor }) => {
  return (
    <>
      <img src={image} alt="" />
      <p style={{ fontWeight: "bold" }}>{title}</p>
      <p style={{ fontWeight: "normal" }}>{desc}</p>
      <a href={link} style={{ color: linkcolor }}>
        Click here to View
      </a>
    </>
  );
};

export default ProjectComponent;
