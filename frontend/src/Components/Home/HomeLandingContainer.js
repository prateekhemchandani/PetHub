import React from "react";
import footPrint from "./images/footPrint.png";
import { Link } from "react-router-dom";

const HomeLandingContainer = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home-container">
      <div className="homeContainer-left">
        <div>
          <p className="home-title">
            <div className="home-titlePlusPng">
              <p>You Can't </p>
              {/* <img src={homepageDog} alt="Dog sitting" /> */}
            </div>
            Buy Love,But You
            <br />
            Can Rescue it ❤️
          </p>
          <p className="home-second-para">
            Every dog deserves a home, and every home deserves a dog.
          </p>
        </div>
        <div className="adopt-btn">
          <Link to="/PetCards">
            <button className="Home-button" onClick={scrollToTop}>
              <p>Adopt a Pet</p>
              <img src={footPrint} alt="footprint" />
            </button>
          </Link>
        </div>
      </div>
      <div className="homeContainer-right">
        <img
          src="data:image/jpeg;base64,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"
          alt="Not anymore"
        />
      </div>
    </div>
  );
};

export default HomeLandingContainer;
