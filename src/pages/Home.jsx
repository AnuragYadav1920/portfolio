import React from "react";
import * as Assets from "../assets/Assets";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <img src={Assets.HomePage} className="home-page-image" alt="" />
        <div className="home-page-quote">
          <p className="quote">
            <ImQuotesLeft />{" "}
            BEST WAY TO <br /> LEARN IS TO CREATE <br />IT. {"  "}
            <ImQuotesRight />
          </p>
          <p className="quote-writer">By : Anurag Yadav</p>
        </div>
      </div>
    </>
  );
};

export default Home;