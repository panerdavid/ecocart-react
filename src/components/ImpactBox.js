import React, { Component } from "react";
import "../stylesheets/ImpactBox.css";
export default class ImpactBox extends Component {
  render(props) {
    return (
      <div className="box">
        <h1 id="icon">{this.props.icon}</h1>
        <div className="center impact-text">
          <h2 id="count">{this.props.count}</h2>
          <p id="stat">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
