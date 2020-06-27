import React, { Component } from "react";
import bgtask from "./bg_task.jpg";
import axios from "axios";
import JwtDecode from "jwt-decode";
import { toast } from "react-toastify";
const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};

export default class Clienttask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "",
      description: "",
      status: "pending",
      amountpaid: 0,
      clientid: 0,
      providerid: 0,
    };
  }

  changeHanlder = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    const decode = JwtDecode(token);
    const userIdz = decode.sub;
    console.log(token);
    fetch(`http://13.58.157.19:8081/users/getClientDetails/${userIdz}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          clientid: data[0].userid,
        });
      })

      .catch((err) => console.log(err));
  }

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    const token = localStorage.getItem("token");

    axios
      .post("http://13.58.157.19:8081/tasks", this.state, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        toast("🦄 Task Successfully Created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.props.history.push("/viewtask");
      })
      .catch((err) => {
        console.log("Somethings wrong");
        console.log(err);
      });
  };
  // http://13.58.157.19:8081/tasks"
  render() {
    const { name, category, description, amountpaid } = this.state;
    return (
      <div style={divStyle}>
        <div
          className="card card-outline-secondary"
          style={{ width: "50%", margin: "auto", marginTop: "3%" }}
        >
          <div className="card-header" style={{ backgroundColor: "cream" }}>
            <h3 className="mb-0" style={{ textAlign: "center" }}>
              Task Bunny Creator
            </h3>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={this.submitHandler}>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Task name
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.changeHanlder}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Category
                </label>
                <div className="col-lg-9">
                  <select
                    className="form-control"
                    value={category}
                    name="category"
                    onChange={this.changeHanlder}
                  >
                    <option value="" disabled hidden>
                      Choose here
                    </option>
                    <option value="Home">Home</option>
                    <option value="Moving">Moving</option>
                    <option value="Laundry">Laundry</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Food">Food</option>
                    <option value="Yard Work">Yard Work</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                  {/* <input
                    className="form-control"
                    type="text"
                    name="shots_of_espresso"
                    value="sample"
                    onChange={this.changeHanlder}
                    required
                  /> */}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Task Description
                </label>
                <div className="col-lg-9">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="description"
                    value={description}
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
              <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">
                  Total Pay $
                </label>
                <div className="col-lg-9">
                  <input
                    className="form-control"
                    type="text"
                    name="amountpaid"
                    value={amountpaid}
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
                    Post Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
