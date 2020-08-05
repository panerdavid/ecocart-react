import React, { Component } from "react";
import "../stylesheets/ImpactBox.css"
export default class ImpactBox extends Component {
  render(props) {
    return (
      <div className="box">
        {this.props.icon}
        
        {this.props.count}
       
        {this.props.subtitle}
      </div>
    );
  }
}
