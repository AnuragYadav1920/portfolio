import React from "react";
import { Link } from "react-router-dom";
import * as Assets from "../assets/Assets";
const Contact = () => {
  const contactDetails = [
    {
      image: `${Assets.LinkedIn}`,
      social_id: "Anurag Yadav",
      link: "https://in.linkedin.com/in/anuragyadav1920",
      link_btn_value:'Folllow'
    },
    {
      image: `${Assets.Gmail}`,
      social_id: "anuragyadav.webdev@gmail.com",
      link: "mailto:anuragyadav.webdev@gmail.com",
      link_btn_value:'Mail to'
    },
    {
      image: `${Assets.Whatsapp}`,
      social_id: "+91 6387208361",
      link: "https://wa.me/916387208361",
      link_btn_value:'Whatsapp Me'
    },
    {
      image: `${Assets.Github}`,
      social_id: "Anurag Yadav",
      link: "https://github.com/AnuragYadav1920",
      link_btn_value:'Folllow'
    }
  ];
  return (
    <>
      <div className="container carton">
        {contactDetails?.map((item, index) => (
          <div className="card">
            <img
              src={item.image}
              alt="contact-image"
              className="card-image"
            />
            <span className="card-details-heading">{item.social_id}</span>
            <div className="card-link">
              <Link
                to={item.link}
                target="_blank"
                className="card-link-btn"
              >
                {item.link_btn_value}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
