import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Home from "./Home";
import Rome from "./Rome";
import Venice from "./Venice";
import More from "./More";
import Comments from "./Comments";
import Switch from "react-input-switch";
import Video from "./video";

class Main extends Component {
  state = {
    dark: 0,
    text: "Dark",
  };
  toggleSwitch = () => {
    let newState = 0;
    let text = "Dark";
    if (this.state.dark === 0) {
      newState = 1;
      text = "Light";
    }
    this.setState({ dark: newState, text: text });
  };
  render() {
    let navClass = {};
    if (this.state.dark === 1) {
      navClass = {
        backgroundColor: "#263238",
        color: "white",
        fontSize: "15px",
      };
    } else {
      navClass = {
        backgroundColor: "#4DB6AC",
        color: "black",
        fontSize: "15px",
      };
    }
    return (
      <div>
        <center>
          <div style={navClass}>
            <b>{this.state.text} </b>
            <Switch
              value={this.state.dark}
              onChange={() => this.toggleSwitch()}
              style={{ marginTop: "0.5%", width: "2%" }}
            ></Switch>
          </div>
        </center>
        <Route
          path="/Home"
          exact
          render={(props) => (
            <div>
              <NavBar {...props} page={"Home"} dark={this.state.dark} />
              <Home {...props} dark={this.state.dark} />
            </div>
          )}
        />
        <Route
          path="/Rome"
          exact
          render={(props) => (
            <div>
              <NavBar {...props} page={"Rome"} dark={this.state.dark} />
              <Rome {...props} dark={this.state.dark} />
            </div>
          )}
        />
        <Route
          path="/Venice"
          exact
          render={(props) => (
            <div>
              <NavBar
                {...props}
               // key={Math.floor(Math.random() * 10)}
                page={"Venice"}
                dark={this.state.dark}
              />
              <Venice {...props} dark={this.state.dark} />
            </div>
          )}
        />
        <Route
          path="/More"
          exact
          render={(props) => (
            <div>
              <NavBar
                {...props}
                //key={Math.floor(Math.random() * 10)}
                page={"More"}
                dark={this.state.dark}
              />
              <More {...props} dark={this.state.dark} />
            </div>
          )}
        />
        <Route
          path="/Comments"
          exact
          render={(props) => (
            <div>
              <NavBar
                {...props}
                //key={Math.floor(Math.random() * 10)}
                page={"Comments"}
                dark={this.state.dark}
              />
              <Comments
                {...props}
               // key={Math.floor(Math.random() * 10)}
                dark={this.state.dark}
              />
            </div>
          )}
        />
        <Route
          path="/Video"
          exact
          render={(props) => (
            <div>
              <NavBar
                {...props}
                //key={Math.floor(Math.random() * 10)}
                page={"Video"}
                dark={this.state.dark}
              />
              <Video
                {...props}
               // key={Math.floor(Math.random() * 10)}
                dark={this.state.dark}
              />
            </div>
          )}
        />
        <Redirect to="/Home" />
      </div>
    );
  }
}

export default Main;
