import React from "react";
import * as Assets from "../assets/Assets";
const About = () => {
  return (
    <>
      <div className="container about">
        <div className="about-summary">
          <span className="about-summary-heading">About Me </span>
          <p style={{ fontSize: "18px", lineHeight: "30px", color:'#ffffff' }}>
          I’m a passionate Web Developer with a strong foundation in both front-end and back-end technologies, including HTML, CSS, JavaScript, and modern frameworks such as React and Node.js. I specialize in building responsive, user-focused websites and applications that not only look great but also function seamlessly across devices. With a sharp eye for detail and a mindset geared toward clean, maintainable code, I thrive on solving complex problems and delivering efficient, scalable solutions. My goal is to bridge the gap between design and functionality, ensuring every project is both visually compelling and technically robust.
          </p>
        </div>
        <div className="about-details">
          <div className="about-details-image">
            <img src={Assets.MyPhoto} className="my-photo" alt="my-photo" />
          </div>
          <div className="about-details-info">
            <span style={{display:'block' }}>
              <span style={{color: "#ffb907" }}>
                Name :{" "}
              </span>
              Anurag Yadav
            </span>
            <span style={{display:'block' }}>
              <span style={{color: "#ffb907" }}>
                Date Of Birth :{" "}
              </span>{" "}
              19 Aug 2000{" "}
            </span>
            <span style={{display:'block' }}>
              <span style={{color: "#ffb907" }}>
                Current Address :{" "}
              </span>
              C - 41 Sector 63A Noida UP, 201307{" "}
            </span>
            <span style={{ display:'block' }}>
              <span style={{color: "#ffb907" }}>
                Permanent Address :
              </span>
              Chheechhemau, Post-Katra, Raebareli UP, 229204
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
