import React from "react";
import { Link } from "react-router-dom";
const Nopage = () => {
  return (
    <>
      <div className="error-container">
        <div className="error">
        <span className="sorry-title"> 404 ERROR</span>
        <span className="no-page-found"> ? No Page found.....</span>
        <Link to="/" className="back-to-home">Back To Home Page</Link>
        </div>
      </div>
    </>
  );
};

export default Nopage;
