import React, { Component } from 'react';
import "../App.css";
import ReactPlayer from 'react-player';


function Video(props) {
    return (
        <div>
        <ReactPlayer 
        url='videos/works.mp4'
        playing="true"
        loop="true"
       />
       </div>
    )
    // public/videos/sample.mp4
}
export default Video;