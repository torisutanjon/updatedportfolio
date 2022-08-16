//dependencies
import React from "react";

//styles
import "../Styles/TechnologyComponentStyle.css";

interface Technology {
  technology: {
    title: string;
    list: Array<string>;
  };
}

const TechnologiesComponent: React.FC<Technology> = ({ technology }) => {
  return (
    <div className="technologies-div">
      <div className="title-div">
        <p>{technology.title}</p>
      </div>
      <div className="list-div">
        <ul>
          {technology.list.map((others) => {
            return <li>{others}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TechnologiesComponent;
