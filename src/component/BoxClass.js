import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.result = "";
  }

  render() {
    return (
      <div className={`box ${this.props.result}`}>
        <h1 className="name">{this.props.name}</h1>
        <img className="images" src={this.props.item && this.props.item.img}></img>
        <h2 className="result">{this.props.result}</h2>
      </div>
    );
  }
}
