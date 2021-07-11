import React, { Component } from "react";
import "./myStyle.css";

class Rome extends Component {
  state = {};
  render() {
    let bg = {};
    if (this.props.dark === 1) {
      bg = {
        backgroundColor: "#37474F",
        color: "white",
        height:"520px"
      };
    } else {
      bg = {};
    }
    return (
      <div style={bg}>
        <h2>
          <center>Colosseum</center>
        </h2>
        <br></br>
        <div className="row">
          <div className="col-7 left">
            <img
              src="https://img.artpal.com/664231/20-19-9-17-9-42-39m.jpg"
              style={{
                width: "80%",
                borderRadius: "20px",
                boxShadow:
                  "8px 8px 8px 0 rgba(0, 0, 0, 0.5),0 4px 5px 0 rgba(0, 0, 0, 0.1)",
                float: "right",
              }}
            />
          </div>
          <div className="col-3 right" style={{ fontSize: "15px" }}>
            The Colosseum is an oval amphitheatre in the centre of the city of
            Rome, Italy, just east of the Roman Forum. It is the largest ancient
            amphitheatre ever built, and is still the largest standing
            amphitheatre in the world today, despite its age. Construction began
            under the emperor Vespasian in 72 AD and was completed in 80 AD
            under his successor and heir, Titus. Further modifications were made
            during the reign of Domitian. The three emperors that were patrons
            of the work are known as the Flavian dynasty.
          </div>
        </div>
      </div>
    );
  }
}

export default Rome;
