import React, { Component } from "react";
import bg_task from "../ClientComponent/bg_task.jpg";
import axios from "axios";

const left = {
  height: "100%",
  width: "30%",
  position: "fixed",
  zIndex: "1",
  top: "10",
  overflowX: "hidden",
  paddingTop: "20px",
  left: "0",
  // backgroundColor: "#111",
  margin: "auto",
};

const right = {
  height: "100%",
  width: "70%",
  position: "fixed",
  zIndex: "1",
  top: "10",
  overflowX: "hidden",
  paddingTop: "20px",
  right: "0",
  // backgroundColor: "blue",
};
const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};
const userinfo2 = [];
export default class ClientFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientid: 2,
      providerid: 13,
      feedback: "",
      ratings: "",
    };
    this.state2 = {
      userinfo: [],
    };
  }

  changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("http://13.58.157.19:8081/ratings", this.state)
      .then((response) => {
        console.log(response);
        // toast.success("Coffee Successfully Created");
        // this.props.history.push("/coffee");
      })
      .catch((err) => {
        console.log("Somethings wrong");
        console.log(err);
      });
  };

  render() {
    const { feedback, ratings } = this.state;
    return (
      <div>
        <div style={left}>
          <div style={{ marginTop: "5%" }}>
            <h3>Provider Feedback Page</h3>
            <div className="card" style={{ width: "18rem" }}>
              <img src={bg_task} alt="..." className=" card-img-top "></img>
              <div className="card-body">
                <p className="card-text">provider name</p>
              </div>
            </div>
          </div>
        </div>

        <div style={right}>
          <h3>Feedback form</h3>
          <div style={divStyle}>
            <div
              className="card card-outline-secondary"
              style={{ width: "70%", margin: "auto", marginTop: "5%" }}
            >
              <div className="card-header" style={{ backgroundColor: "cream" }}>
                <h3 className="mb-0" style={{ textAlign: "center" }}>
                  Rate your experience with this provider
                </h3>
              </div>
              <div className="card-body">
                <form className="form" onSubmit={this.submitHandler}>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Comments and Feedbacks
                    </label>
                    <div className="col-lg-9">
                      <textarea
                        className="form-control"
                        rows="5"
                        name="feedback"
                        value={feedback}
                        onChange={this.changeHanlder}
                      ></textarea>
                      {/* <input
                    className="form-control"
                    type="text"
                    name="container"
                    value="Sample"
                    onChange={this.changeHanlder}
                    required
                  /> */}
                    </div>
                  </div>
                  <small style={{ textAlign: "center" }}>
                    Rating: 5 is the highest rating and 1 is the lowest
                  </small>
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label">
                      Rating
                    </label>
                    <div className="col-lg-9">
                      <input
                        className="form-control"
                        type="number"
                        max="5"
                        min="1"
                        name="ratings"
                        value={ratings}
                        onChange={this.changeHanlder}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label form-control-label"></label>

                    <div className="col-lg-6" style={{ margin: "auto" }}>
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg"
                        style={{ margin: "auto", width: "50%" }}
                      >
                        Post Feedback
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
