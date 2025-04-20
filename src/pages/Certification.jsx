import React from "react";
import { Link } from "react-router-dom";
import * as Assets from "../assets/Assets";
const Certification = () => {
  const certificates = [
    {
      image: `${Assets.skillIndia}`,
      alt: "certficate-img",
      name: "Skill India",
      link: "https://trainings.internshala.com/certificate/view/nsdc/elu2ze25nhy/izsucy08cyp/",
    },
    {
      image: `${Assets.internshalaTraining}`,
      alt: "certficate-img",
      name: "Internshala Training",
      link: "https://trainings.internshala.com/view_certificate/elu2ze25nhy/hfoqof0es2e/",
    },
  ];
  return (
    <>
      <div className="container carton">
        {certificates?.map((item, index) => (
          <div className="card custom-card" key={index}>
              <img
                src={item.image}
                alt={item.alt}
                className="card-image"
              />
              <span className="card-details-heading">{item.name}</span>
              <div className="card-link">
              <Link to={item.link}  target="_balnk" className="card-link-btn">Verify</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certification;
