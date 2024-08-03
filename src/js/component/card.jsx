import React from "react";

const Card = ({ title, text, imageUrl, link}) => {
    return (
      <div className="card">
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} target="_blank" className="btn btn-success">Get the recipe!</a>
        </div>
      </div>
    );
  };
  
  export default Card;