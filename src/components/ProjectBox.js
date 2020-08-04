import React, { Component } from "react";
import "../App.css";
import ShowMoreText from "react-show-more-text";

export default class ProjectBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ShowMoreText 
    lines={4} 
    more="Learn more ∨"
    less="Hide ^"
    expanded={false}
    width={280}
    >
        <img src={this.props.image}></img>
        <h3 id="project-title">{this.props.title}</h3>
        <p>{this.props.location}</p>
        <p>{this.props.bulletOne}</p>
        <p>{this.props.bulletTwo}</p>
        <p>{this.props.bulletThree}</p>
        <h3 className="green-heading">Verifications</h3>
        <h3 className="green-heading">Sustainable Development</h3>




      

    </ShowMoreText>;
  }
}
