import React, { Component } from "react";
import "../App.css";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";

export default class Video extends Component {
  constructor(props) {
    super(props)
    this.player = React.createRef();
  }

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <div class="row">
        <div>
      
          <ReactPlayer
            ref={this.ref}
            url="videos/works.mp4"
            playing="true"
            loop="true"
            muted="true"
          />
        </div>
        <Button onClick={() => alert(this.player.getDuration())}>test</Button>
        <div>
          <h1> How it works</h1>

          <div id="steps">
            <div class="row">
              <span
                className="line"
              ></span>
              <div>
                <h3>1. Add in Seconds</h3>
                <p>It's free and just takes 2 clicks.</p>
              </div>
            </div>
            <div class="row">
              <span className="line"></span>
              <div>
                <h3>2. Shop like Normal</h3>
                <p>We'll find the carbon emissions of your unique order.</p>
              </div>
            </div>
            <div class="row">
              <span className="line"></span>
              <div>
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


