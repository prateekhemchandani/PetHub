import React from "react";
import Card from "./Card";

const PlanningToAdoptAPet = () => {
  return (
    <div className="planning-container">
      <h1>Why should I choose PetHub?</h1>
      <div className="boxes-container">
        <Card
          title="Commitment to Animal Welfare"
          paragraph=" By choosing our website, you are supporting our mission to rescue and re-home abandoned, and neglected animals."
        />
        <Card
          title="Transparent Adoption Process"
          paragraph="We believe in full transparency with our adoption fees and policies, so there are no surprises or hidden costs."
        />
        <Card
          title="Trusted and Verified"
          paragraph=" All pets listed on our website have been vetted, vaccinated, and given a clean bill of health by certified veterinarians."
        />
      </div>
    </div>
  );
};

export default PlanningToAdoptAPet;
