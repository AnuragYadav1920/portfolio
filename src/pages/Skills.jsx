import React from "react";
import * as Assets from "../assets/Assets";

const Skills = () => {
  const skillsDetails = [
    { image: `${Assets.Cplusplus}`, alt: "C++" },
    { image: `${Assets.Dsa}`, alt: "DSA" },
    { image: `${Assets.Html}`, alt: "HTML" },
    { image: `${Assets.Javascript}`, alt: "Javascript" },
    { image: `${Assets.Css}`, alt: "CSS" },
    { image: `${Assets.Tailwind}`, alt: "Tailwind CSS" },
    { image: `${Assets.Nodejs}`, alt: "NodeJs" },
    { image: `${Assets.Express}`, alt: "Express" },
    { image: `${Assets.Mongodb}`, alt: "MongoDB" },
    { image: `${Assets.Mysql}`, alt: "MySql" },
    { image: `${Assets.Python}`, alt: "Python" },
    { image: `${Assets.Reactjs}`, alt: "ReactJs" },
    { image: `${Assets.Php}`, alt: "PHP" },
  ];
  return (
    <>
      <div className="container carton">
        {skillsDetails?.map((item, index) => (
          <div className="card custom-card" key={index}>
            <img src={item.image} className="card-image" alt={item.alt} />
            <span className="card-details-heading">{item.alt}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
