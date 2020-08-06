import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../stylesheets/ImpactBox.css";

export default class ImpactBox extends Component {
  
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
              redraw={true}
              duration={5}
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
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
