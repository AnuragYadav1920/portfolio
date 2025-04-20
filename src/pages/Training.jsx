import React from "react";
import * as Assets from "../assets/Assets";
const Training = () => {
  const trainings = [
    {
      image: `${Assets.Reactjs}`,
      name: "Web Development",
      mode: "online",
      start_date: "15 January 2025",
      end_date: "15 March 2025",
      source: "Internshala",
    },
    {
      image: `${Assets.Reactjs}`,
      name: "Python",
      mode: "online",
      start_date: "15 December 2024",
      end_date: "10 Jan 2025",
      source: "Youtube",
    },
    {
      image: `${Assets.Reactjs}`,
      name: "Backend with Javascript",
      mode: "online",
      start_date: "01 Oct 2024",
      end_date: "10 Dec 2024",
      source: "Youtube",
    },
    {
      image: `${Assets.Reactjs}`,
      name: "Frontend Development",
      mode: "online",
      start_date: "22 June 2024",
      end_date: "20 Sept 2024",
      source: "Udemy",
    },
  ];
  return (
    <>
      <div className="container carton">
        {trainings?.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt="" className="card-image" />
            <span className="card-details-heading">{item.name}</span>
            <span className="card-details-span">Mode : {item.mode}</span>
            <span className="card-details-span">
              Start Date : {item.start_date}
            </span>
            <span className="card-details-span">
              End Date : {item.end_date}
            </span>
            <span className="card-details-span">Source : {item.source}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Training;
