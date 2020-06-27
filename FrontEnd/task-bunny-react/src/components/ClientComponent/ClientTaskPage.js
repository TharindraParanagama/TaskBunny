import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

const divStyle = {
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${bgtask})`,
  backgroundSize: "cover",
};

class ClientTaskPage extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const decode = jwtDecode(token);
    const userIdz = decode.sub;
    console.log(token);
    fetch(`http://13.58.157.19:8081/tasks/mytask/${userIdz}`, {
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
          tasks: data,
        });
      })

      .catch((err) => console.log(err));
  }

  changeDone(task) {
    const token = localStorage.getItem("token");
    const data1 = {
      amountpaid: task.amountpaid,
      category: task.category,
      clientid: task.clientid,
      description: task.description,
      name: task.name,
      providerid: task.providerid,
      status: "done",
    };
    const data2 = JSON.stringify(data1);
    console.log(data2);
    const tId = task.taskid;
    const proxyUrl = "http://13.58.157.19:8081/tasks/status/";
    const targetUrl = tId;
    fetch(proxyUrl + targetUrl, {
      method: "PUT",
      body: JSON.stringify(data1),

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      console.log(res);
      console.log(data1);
      toast('🦄 Task Completed: Redirecting to provide a feedback"', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // this.props.history.push("/client page");
      window.location.reload();
    });
  }

  //   axios
  //     .put(`${holder}${proxyUrl}${targetUrl}`, data2, {
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log("Somethings wrong");
  //       console.log(err);
  //     });
  // }

  changeChange(task) {
    console.log(task);
    const token = localStorage.getItem("token");
    const data1 = {
      amountpaid: task.amountpaid,
      category: task.category,
      clientid: task.clientid,
      description: task.description,
      name: task.name,
      providerid: task.providerid,
      status: "done",
    };
    const data2 = JSON.stringify(data1);
    console.log(data2);
    const tId = task.taskid;
    const proxyUrl = "http://13.58.157.19:8081/deletetask/";
    const targetUrl = tId;
    fetch(proxyUrl + targetUrl, {
      method: "DELETE",
      //     // body: {
      //     //   name: task.name,
      //     //   category: task.category,
      //     //   clientid: task.clientid,
      //     //   description: task.description,
      //     //   status: stat,
      //     //   amountpaid: task.amountpaid,
      //     //   providerid: task.providerid,
      //     // },

      // body: JSON.stringify(data1),

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      toast.error("Task has been successfully deleted");
      window.location.reload();
    });
    // deletetask/taskzId
  }

  changeFeedback(task) {
    const token = localStorage.getItem("token");
    alert(task.providerid);
    axios
      .get("http://13.58.157.19:8081/users/" + task.providerid, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        console.log(result.data.username);
        this.props.history.push({
          pathname: "/ROLE_PROVIDER",
          state: { username: result.data.username },
        });
      })
      .catch((err) => console.log("error username:" + err));
  }

  render() {
    return (
      <div style={divStyle}>
        <div style={{ width: "80%", margin: "auto" }}>
          <h1 style={{ marginBottom: "2%", marginTop: "2%" }}>My Task List</h1>
          <table
            id="dtBasicExample"
            className="table table-light table-bordered table-md"
            cellSpacing="0"
            width="100%"
          >
            <thead className="thead-dark">
              <tr>
                <th className="th-lg">Task Id</th>
                <th className="th-lg">Task Name</th>
                <th className="th-lg">Task Category</th>
                <th className="th-lg">Status</th>
                <th className="th-lg">Price</th>
                <th className="th-lg">Provider</th>
                <th className="th-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task) => {
                if (task.status !== "done") {
                  return (
                    <tr key={task.taskid}>
                      <td>{task.taskid}</td>
                      <td>{task.name}</td>
                      <td>{task.category}</td>
                      <td>{task.status}</td>
                      <td>{task.amountpaid}</td>
                      <td>{task.providerid}</td>
                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          onClick={this.changeChange.bind(this, task)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-success"
                          onClick={this.changeDone.bind(this, task)}
                        >
                          Done{" "}
                        </button>
                      </td>
                    </tr>
                  );
                } else if (task.status === "done") {
                  return (
                    <tr key={task.taskid}>
                      <td>{task.taskid}</td>
                      <td>{task.name}</td>
                      <td>{task.category}</td>
                      <td>{task.status}</td>
                      <td>{task.amountpaid}</td>
                      <td>{task.providerid}</td>
                      <td>
                        <button
                          type="submit"
                          className="btn btn-danger"
                          onClick={this.changeFeedback.bind(this, task)}
                        >
                          Feedback
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default withRouter(ClientTaskPage);
