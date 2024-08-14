import React from "react";

function Box(props) {
  return (
    <div className={`box ${props.result}`}>
      <h1 className="name">{props.name}</h1>
      <img className="images" src={props.item && props.item.img}></img>
      <h2 className="result">{props.result}</h2>
    </div>
  );
}


export default Box;
