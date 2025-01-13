import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:kashifkzmi5@gmail.com">
          abc@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="#">
          User Name: PetHub
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="#">
          @PetHub
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="#">
          +91 12345678
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile" />
      </div>
    </div>
  );
};

export default Contact;
