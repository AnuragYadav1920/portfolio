import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import * as Assets from "../assets/Assets";

const Navbar = () => {
  const navItems = [
    { icon: Assets.Home, alt: "home-icon", path: "/" },
    { icon: Assets.Profile, alt: "profile-icon", path: "/about" },
    { icon: Assets.Education, alt: "education-icon", path: "/education" },
    { icon: Assets.Experience, alt: "experience-icon", path: "/experience" },
    { icon: Assets.Skills, alt: "skills-icon", path: "/skills" },
    { icon: Assets.Projects, alt: "project-icon", path: "/projects" },
    { icon: Assets.Contact, alt: "contact-icon", path: "/contact" },
    { icon: Assets.Training, alt: "training-icon", path: "/trainings" },
    {
      icon: Assets.Certification,
      alt: "certification-icon",
      path: "/certification",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const downarrowRef = useRef(null);
  const downMenuRef = useRef(null);
  useEffect(() => {
    const handleDropdown = (event) => {
      const clickedOnDropdownIcon =
        downarrowRef.current?.contains(event?.target) ||
        downMenuRef.current?.contains(event?.target);

      const clickedOutsideTheDropdown =
        dropdownRef.current && !dropdownRef.current.contains(event?.target);

      if (clickedOnDropdownIcon) {
        setIsDropdownOpen((prev) => !prev);
      } else if (clickedOutsideTheDropdown) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleDropdown);
    return () => {
      document.removeEventListener("mousedown", handleDropdown);
    };
  }, []);
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <img src={Assets.Logo} className="nav-logo" alt="site logo" />
        </div>
        <div className="nav-right">
          <div className="nav-dropdown">
            <img
              src={Assets.DownArrow}
              className={`nav-dropdown-icon ${
                isDropdownOpen ? "rotate-open" : "rotate-closed"
              }`}
              alt="arrow-icon"
              ref={downarrowRef}
            />
            <img
              src={Assets.Menu}
              className="nav-dropdown-icon hidden "
              ref={downMenuRef}
              alt="menu-icon"
            />
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="nav-container">
          <div className="nav-links" ref={dropdownRef}>
            {navItems?.map((item) => (
              <div key={item.alt} className="nav-links-icon" onClick={()=>setIsDropdownOpen(false)}>
                <NavLink to={item.path}>
                  <img src={item.icon} className="icons" alt={item.alt} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
