import React, { Component } from "react";
import { Redirect, Route, Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    page: this.props.page,
  };
  highLightOption = (opt) => {
    if (this.props.dark === 0) {
      if (this.state.page === opt) return "#263238";
    } else {
      if (this.state.page === opt) return "green";
    }

    return "";
  };
  getColor = () => {
    if (this.props.dark === 1) return "white";
    return "black";
  };
  render() {
    let normal = {
      marginInline: 25,
      fontSize: "15px",
      marginTop: 5,
      padding: 5,
      cursor: "pointer",
    };
    let sel = {
      marginInline: 25,
      fontSize: "15px",
      marginTop: 5,
      fontWeight: "bold",
      backgroundColor: "#7CB342",
      padding: 5,
      borderRadius: 10,
      cursor: "pointer",
    };
    let navClass = {};
    if (this.props.dark === 1) {
      navClass = {
        backgroundColor: "#263238",
        color: "white",
      };
    } else {
      navClass = {
        backgroundColor: "#4DB6AC",
        color: "black",
      };
    }
    let brand = {};
    if (this.props.dark === 1) {
      brand = {
        color: "white",
      };
    } else {
      brand = {
        color: "black",
      };
    }

    let italyImg =
      "https://whatsanswer.com/wp-content/uploads/2020/01/National-Flag-Of-Italy.jpg";
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={navClass}>
          <Link className="navbar-brand" to="/" style={brand}>
            <img src={italyImg} style={{ width: "7%" }} /> <b style={{fontSize:"30px"}}>ITALY</b>
          </Link>

          <div className="navbarSupportedContent">
            <ul className="navbar-nav">
              <li
                className="navbar-item"
                style={{
                  marginTop: "2%",
                  fontSize: "17px",
                  backgroundColor: this.highLightOption("Home"),
                  borderRadius: "10px",
                }}
              >
                <Link to="/Home" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li
                className="navbar-item"
                style={{
                  marginTop: "2%",
                  fontSize: "17px",
                  marginInline: 12,
                  backgroundColor: this.highLightOption("Rome"),
                  borderRadius: "10px",
                }}
              >
                <Link to="/Rome" className="nav-link text-light">
                  Rome
                </Link>
              </li>
              <li
                className="navbar-item"
                style={{
                  marginTop: "2%",
                  fontSize: "17px",
                  marginInline: 12,
                  backgroundColor: this.highLightOption("Venice"),
                  borderRadius: "10px",
                }}
              >
                <Link to="/Venice" className="nav-link text-light">
                  Venice
                </Link>
              </li>

              <li
                className="navbar-item"
                style={{
                  marginTop: "2%",
                  fontSize: "17px",
                  marginInline: 12,
                  backgroundColor: this.highLightOption("More"),
                  borderRadius: "10px",
                }}
              >
                <Link to="/More" className="nav-link text-light">
                  More
                </Link>
              </li>

              <li
                className="navbar-item"
                style={{
                  marginTop: "2%",
                  fontSize: "17px",
                  marginInline: 12,
                  backgroundColor: this.highLightOption("Comments"),
                  borderRadius: "10px",
                }}
              >
                <Link to="/Comments" className="nav-link text-light">
                  Comments
                </Link>
              </li>

              <li
                className="navbar-item"
                style={{
                  marginTop: "2%",
                  fontSize: "17px",
                  marginInline: 12,
                  backgroundColor: this.highLightOption("Video"),
                  borderRadius: "10px",
                }}
              >
                <Link to="/Video" className="nav-link text-light">
                  Video
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
