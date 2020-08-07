import React, { Component } from "react";
import CountUp from "react-countup"; //DOCUMENTATION: https://www.npmjs.com/package/react-countup
import VisibilitySensor from "react-visibility-sensor"; //DOCUMENTATION: https://www.npmjs.com/package/react-visibility-sensor
import "../stylesheets/ImpactBox.css";

export default class ImpactBox extends Component {
  state = {
    visActive: true,
  };

  toggleActive = () => {
    this.setState({ visActive: false });
  };

  render(props) {
    return (
      <div className="box">
        <h1 id="icon">{this.props.icon}</h1>
        <div className="center impact-text">
          <h2 id="count">
            <CountUp
              start={0}
              end={this.props.count}
              delay={0.3}
              redraw={false}
              duration={5}
              onEnd={() => {
                this.setState({ visActive: false });
              }}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor
                  onChange={start}
                  active={this.state.visActive}
                  delayedCall
                >
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h2>
          <p id="stat">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}
