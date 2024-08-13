import React from "react";

function Box(props) {
  return (
    <div className="box">
      <h1 className="name">{props.name}</h1>
      <img className="images" src={props.item && props.item.img, alt={props.item ? props.item.name : ''}}></img>
      <h2 className="result">WIN</h2>
    </div>
  );
}

export default Box;
