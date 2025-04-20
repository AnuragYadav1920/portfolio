import React from "react";
import * as Assets from "../assets/Assets"

const Experience = () => {
  const experienceDetails = [];

  return (
    <>
      <div className="container carton">
        {experienceDetails.length > 1 ? (
          experienceDetails.map((item, index) => (
            <div className="card" key={index}>
              <img src="" alt="" className="card-image" />
              <span className="card-details-heading">ABC Pvt Ltd.</span>
              <span className="card-details-span">
                Start Date : 10 jan 2025
              </span>
              <span className="card-details-span">End Date : 10 jan 2025</span>
              <span className="card-details-span">
                Designation : Software Developer
              </span>
            </div>
          ))
        ) : (
          <div className="card custom-card">
            <img src={Assets.sorryImage}  className="card-image" alt="sorry-image"/>
            <span className="card-details-heading">No experience found !</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Experience;
