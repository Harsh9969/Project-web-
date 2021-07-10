import React, { Component } from "react";
class Venice extends Component {
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
          <center>Venice</center>
        </h2>
        <br></br>
        <div className="row">
          <div className="col-7 left">
            <img
              src="https://www.ship-technology.com/wp-content/uploads/sites/16/2020/08/shutterstock_720444505_800x.jpg"
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
            Venice is a city in northeastern Italy and the capital of the Veneto
            region. It is built on a group of 118 small islands that are
            separated by canals and linked by over 400 bridges. The islands are
            in the shallow Venetian Lagoon, an enclosed bay lying between the
            mouths of the Po and the Piave rivers (more exactly between the
            Brenta and the Sile). In 2020, 258,685 people resided in the Comune
            di Venezia, of whom around 55,000 live in the historical city of
            Venice (centro storico). Together with Padua and Treviso, the city
            is included in the Padua-Treviso-Venice Metropolitan Area (PATREVE),
            which is considered a statistical metropolitan area, with a total
            population of 2.6 million.
          </div>
        </div>
      </div>
    );
  }
}

export default Venice;
