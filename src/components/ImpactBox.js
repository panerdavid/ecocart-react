import React, { Component } from "react";
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
