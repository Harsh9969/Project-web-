import React, { Component } from "react";
import axios from "axios";
import "./myStyle.css";
class Comments extends Component {
  state = {
    form: { name: "", comment: "", img: null },
    error: "",
    comments: [],
  };
  async componentDidMount() {
    let resp = await axios.get("http://localhost:2410/getComments");
    //console.log(resp);
    let data = resp["data"]["message"];
    //console.log(data);
    this.setState({ comments: data });
  }
  handleChange = (e) => {
    const { currentTarget: inp } = e;
    let localItem = this.state.form;
    localItem[inp.name] = inp.value;
    this.setState({ form: localItem });
  };
  handleFileChange = (e) => {
    //console.log(e);
    let files = e["target"]["files"];
    let name = files[0]["name"];
    let type = files[0]["type"].split("/")[0];
    if (type !== "image") {
      this.setState({ error: "Invalid File!" });
      return;
    }
    let size = Math.ceil(files[0]["size"] / (1024 * 1024));
    //console.log(size);
    if (size > 1) {
      this.setState({ error: "Size Greater than 1 MB" });
      return;
    } else {
      let localForm = this.state.form;
      localForm["img"] = files[0]["name"];
      this.setState({ error: "", form: localForm });
    }
  };
  handleSubmit = async () => {
    if (
      this.state.form.name === "" ||
      this.state.form.img === null ||
      this.state.form.comment === ""
    )
      return;
    let resp = await axios.post(
      "http://localhost:2410/addComment",
      this.state.form
    );
    let data = resp["data"]["message"];
    console.log(data);
    let localForm = { name: "", comment: "", img: null };
    this.setState({ form: localForm });
    this.componentDidMount();
  };
  render() {
    let bg = {};
    if (this.props.dark === 1) {
      bg = {
        backgroundColor: "#37474F",
        color: "white",
        height: "100%",
      };
    } else {
      bg = {};
    }
    return (
      <div style={bg}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-3">
            <h2>Add New Comment</h2>
            <center>
              <i className="fa fa-comment fa-5x"></i>
            </center>
          </div>
          <div className="col">
            <div className="form-group" style={{ width: "40%" }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={this.state.form.name}
                className="form-control"
                name="name"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group" style={{ width: "40%" }}>
              <label htmlFor="Comment">Comment</label>
              <textarea
                type="text"
                value={this.state.form.comment}
                className="form-control"
                name="comment"
                onChange={this.handleChange}
                row="8"
                col="12"
                required
              />
            </div>
            <div className="form-group" style={{ width: "40%" }}>
              <label htmlFor="File">File</label>
              <input
                type="file"
                className="form-control"
                name="img"
                onChange={this.handleFileChange}
                required
              />
              <small>
                <b>Max 1 MB ! (*.png, *.jpeg, *.jpg, *.bmp)</b>
              </small>
              <br></br>
              <small id="error" style={{ color: "red", fontWeight: "bold" }}>
                {this.state.error}
              </small>
              <br></br>
              <center>
                <button
                  className="btn btn-success"
                  onClick={() => this.handleSubmit()}
                >
                  Submit
                </button>
              </center>
            </div>
          </div>
        </div>

        <div className="row">
          {this.state.comments.map((com) => (
            <figure
              className="col-3"
              style={{
                borderRadius: "20px",
                boxShadow:
                  "8px 8px 8px 0 rgba(0, 0, 0, 0.5),0 4px 5px 0 rgba(0, 0, 0, 0.1)",
                marginInline: "2%",
                padding: "10px",
                marginTop: "2%",
              }}
            >
              <img
                src={"./" + com["image"]}
                style={{ width: "100%", borderRadius: "20px" }}
              />
			  <br/>
              <figcaption>
                <h2>{com["name"]}</h2>
                <p>{com["comment"]}</p>
				<small></small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}

export default Comments;
