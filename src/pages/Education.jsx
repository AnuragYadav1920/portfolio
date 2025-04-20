import React from "react";
import * as Assets from "../assets/Assets";
const Education = () => {
  const educationDetails = [
    {
      Name: "Feroze Gandhi Institute Of Engineering And Technology, Raebareli, UP, 229001",
      Branch: "Computer Science And Engineering",
      Type: "Graduation",
      Year: "2020-24",
      Grade: "7.74 / 10",
      image: `${Assets.CollegeImage}`,
      alt: "college-image",
    },
    {
      Name: "S J S Public School Unchahar, Raebareli, UP, 229404",
      Branch: "Science",
      Type: "Intermediate",
      Year: "2017-18",
      Grade: "80.8 %",
      image: `${Assets.SchoolImage}`,
      alt: "school-image",
    },
    {
      Name: "S J S Public School Unchahar, Raebareli, UP, 229404",
      Branch: "Science",
      Type: "High School",
      Year: "2015-16",
      Grade: "10 / 10",
      image: `${Assets.SchoolImage}`,
      alt: "school-image",
    },
  ];
  return (
    <>
      <div className="container carton">
        {educationDetails?.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} className="card-image" alt={item.alt} />
            <span className="card-details-heading">{item.Name}</span>
            <span className="card-details-span">Branch : {item.Branch}</span>
            <span className="card-details-span">Level : {item.Type}</span>
            <span className="card-details-span">Year : {item.Year}</span>
            <span className="card-details-span">
              CGPA / Percentage : {item.Grade}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
