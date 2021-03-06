import React, { Component } from "react";
import "../App.css";
import "../stylesheets/Video.css";
import ReactPlayer from "react-player"; //DOCUMENTATION: https://www.npmjs.com/package/react-player

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  state = {
    activeStep: 0,
  };

  clickStep = (step) => {
    this.player.seekTo(step);
    switch (step) {
      case this.props.stepOne:
        this.setState({ activeStep: 1 });
        break;
      case this.props.stepTwo:
        this.setState({ activeStep: 2 });
        break;
      case this.props.stepThree:
        this.setState({ activeStep: 3 });
        break;
      default:
        this.setState({ activeStep: 0 });
    }
  };

  handleProgress = (p) => {
    switch (p.playedSeconds.toFixed(0)) {
      case 0:
        this.setState({ activeStep: 0 });
        break;
      case this.props.stepOne:
        this.setState({ activeStep: 1 });
        break;
      case this.props.stepTwo:
        this.setState({ activeStep: 2 });
        break;
      case this.props.stepThree:
        this.setState({ activeStep: 3 });
        break;
      default:
        break;
    }
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    return (
      <div id="video-component">
        <div>
          <ReactPlayer
            ref={this.ref}
            url={this.props.video}
            playing={true}
            loop={true}
            muted={true}
            progressInterval={1000}
            onProgress={this.handleProgress}
          />
        </div>

        <div>
          <h1 id="title"> How it works</h1>

          <div id="steps">
            <div
              className="row step"
              onClick={() => this.clickStep(this.props.stepOne)}
            >
              <span
                className={`line ${
                  this.state.activeStep === 1 ? "line-active" : ""
                }`}
              ></span>
              <div
                className={`step-one step-content ${
                  this.state.activeStep === 1 ? "step-content-active" : ""
                }`}
              >
                <h3>1. Add in Seconds</h3>
                <p>It's free and just takes 2 clicks.</p>
              </div>
            </div>
            <div
              className="row step"
              onClick={() => this.clickStep(this.props.stepTwo)}
            >
              <span
                className={`line ${
                  this.state.activeStep === 2 ? "line-active" : ""
                }`}
              ></span>
              <div
                className={`step-two step-content ${
                  this.state.activeStep === 2 ? "step-content-active" : ""
                }`}
              >
                <h3>2. Shop like Normal</h3>
                <p>We'll find the carbon emissions of your unique order.</p>
              </div>
            </div>
            <div
              className="row step"
              onClick={() => this.clickStep(this.props.stepThree)}
            >
              <span
                className={`line ${
                  this.state.activeStep === 3 ? "line-active" : ""
                }`}
              ></span>
              <div
                className={`step-three step-content ${
                  this.state.activeStep === 3 ? "step-content-active" : ""
                }`}
              >
                <h3>3. Save the Planet</h3>
                <p>
                  At no cost to you, we'll make sure your orders are completely
                  carbon neutral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
