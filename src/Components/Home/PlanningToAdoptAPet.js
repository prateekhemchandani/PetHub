import React from "react";
import Card from "./Card";

const PlanningToAdoptAPet = () => {
  return (
    <div className="planning-container">
      <h1>Planning to Adopt a Pet?</h1>
      <div className="boxes-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default PlanningToAdoptAPet;
