import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <div>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
