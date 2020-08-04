import React, { Component } from "react";
import "../App.css";

export default class ProjectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div className="col-sm-4 col-sm-offset-4">
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <img alt=""></img>
              <h4>{this.props.title}</h4>
              <p>{this.props.location}</p>
            </div>

            <div
              className={
                this.state.open
                  ? "panel-collapse"
                  : "panel-collapse panel-close"
              }
            >
              <div className="project-bullets">
                <ul>
                  {this.props.bullets.map((value, index) => {
                    return <li key={index}>{value}</li>;
                  })}
                </ul>
              </div>
              <h4>Verifications</h4>
              <div className="project-verifications">
                  {this.props.verifications.map((value, index) => {
                      return <img src={value} alt=""></img>
                  })}
              </div>
              <h4>Sustainable Devlopment</h4>
              <div className="project-developments">
              {this.props.developments.map((value, index) => {
                      return <img src={value} alt=""></img>
                  })}
              </div>
            </div>
            <a
              className="panel-title"
              onClick={function () {
                this.setState({ open: !this.state.open });
              }.bind(this)}
            >
              {this.state.open ? "Hide" : "Learn More"}
            </a>
          </div>
        </div>
      </div>
     
    );
  }
}
