import React from "react";
import AdminUser from "./AdminUsers";
//import { Link } from "react-router-dom";

export default class AdminUserPage extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("http://18.223.15.119:3000/admin-user")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h3>Users </h3>
        <AdminUser users={this.state.users} />
        <button className="btn btn-secondary btn-lg">Delete</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-secondary btn-lg">Reset</button>
      </div>
    );
  }
}
