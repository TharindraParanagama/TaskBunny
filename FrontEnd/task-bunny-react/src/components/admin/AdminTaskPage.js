import React from "react";
import AdminTask from "./AdminTask";
//import { Link } from "react-router-dom";

export default class AdminTaskPage extends React.Component {
  state = {
    task: [],
  };

  componentDidMount() {
    fetch("http://18.223.15.119:3000/admin-task")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          tasks: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Task Progress </h3>
        <AdminTask tasks={this.state.tasks} />
        <button className="btn btn-secondary btn-lg">Delete</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-secondary btn-lg">Reset</button>
      </div>
    );
  }
}
