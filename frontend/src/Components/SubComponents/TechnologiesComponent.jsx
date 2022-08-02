//dependencies
import React from "react";

const TechnologiesComponent = ({ title, list, titlecolor }) => {
  return (
    <>
      <p style={{ color: titlecolor }}>{title}</p>
      <ul>
        {list.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default TechnologiesComponent;
