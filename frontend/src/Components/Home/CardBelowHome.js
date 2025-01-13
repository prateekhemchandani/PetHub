import React from "react";
import HomeDarkCardLeftPic from "./images/HomeDarkCardLeftPic.png";
import HomeDarkCardRightPic from "./images/HomeDarkCardRightPic.png";
import "./home.css";
const CardBelowHome = () => {
  return (
    <div className="dark-grey-container">
      <div className="left-pic">
        <img src={HomeDarkCardLeftPic} alt="Dog with toy" />
      </div>
      <div className="left-para">
        By adopting, you save a dog's life and give it a second chance to live
      </div>
      <div className="right-pic">
        <img src={HomeDarkCardRightPic} alt="Dog pic" />
      </div>
      <div className="right-para">
        <p className="we-do">WHAT WE DO?</p>With a focus on matching the right
        pet with the right family, PawFinds makes it easy to adopt love and
        foster happiness.
      </div>
    </div>
  );
};

export default CardBelowHome;
