import React, { Component } from "react";
class Video extends Component {
  state = {};
  render() {
    let bg = {};
    if (this.props.dark === 1) {
      bg = {
        backgroundColor: "#37474F",
        color: "white",
        height:"538px"
      };
    } else {
      bg = {};
    }
    return (
      <div style={bg}>
        <center>
          {" "}
          <br></br>
          <br></br>
          <iframe
            width="660"
            height="371"
            src="https://www.youtube.com/embed/zS4AP0Q8L8g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              borderRadius: "20px",
              boxShadow:
                "8px 8px 8px 0 rgba(0, 0, 0, 0.5),0 4px 5px 0 rgba(0, 0, 0, 0.1)",
            }}
            allowfullscreen
          ></iframe>
        </center>
      </div>
    );
  }
}

export default Video;
