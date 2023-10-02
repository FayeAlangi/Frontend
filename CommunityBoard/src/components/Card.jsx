import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.image} width="100%"></img>
      <h4>{props.name}</h4>
      <h4>{props.date}</h4>
      <a href={props.link}
      target="_blank">
        <button>View Event</button>
      </a>
    </div>
  );
};

export default Card;