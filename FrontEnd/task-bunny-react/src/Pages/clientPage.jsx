import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientProfilePic from "../Assets/AgentProfilePic.png";
import Axios from "axios";
import JWTD from "jwt-decode";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ClientPage(props) {
  const [task, setTask] = useState([]);
  const [clientDetails, setClientDetails] = useState([]);
  const [clientName, setClientName] = useState("");
  const location = useLocation();

  const token = localStorage.getItem("token");
  const username = JWTD(token).sub;

  useEffect(() => {
    console.log(location.state);
    /*   if (location.state.username) {
      setClientName(location.state.username);
    } else {
      setClientName(username); 
    }*/

    if (location.state === null) {
      setClientName(username);
    } else {
      setClientName(location.state.username);
    }

    Axios.get("http://13.58.157.19:8081/tasks/mytask/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => setTask(result.data))
      .catch((err) => console.log("error username:" + err));
  }, []);

  useEffect(() => {
    Axios.get("http://13.58.157.19:8081/users/getClientDetails/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => setClientDetails(result.data))
      .catch((err) => console.log("error username:" + err));
  }, []);
  function RenderRole() {
    if (localStorage.getItem("role") === "ROLE_CLIENT") {
      return <h5 className="card-title">{username.split("@")[0]}</h5>;
    }
  }

  return (
    <React.Fragment>
      <div class="container-fluid">
        <div className="display-4">Client Profile</div>
        <Link to="/createtask">
          <button type="button" class="btn btn-info m-2">
            Create Task
          </button>
        </Link>
        <Link to="/viewtask">
          <button type="button" class="btn btn-info">
            View Task
          </button>
        </Link>
        <div class="row">
          <div class="col-3">
            <div class="card m-2" style={{ width: "250px", height: "500px" }}>
              <img
                class="card-img-top"
                src={ClientProfilePic}
                alt="Service Provider Profile Pic"
                style={{ height: "300px", width: "250px" }}
              />
              <div class="card-body">
                {RenderRole()}
                <p class="card-text">
                  I need a trusted service provider to delegate my work.
                </p>
                <span class="badge badge-success"> Rating : 5.0</span>
              </div>
            </div>
          </div>
          <div class="col-md">
            <ul class="list-group m-2">
              {task.map((task, index) => (
                <li
                  key={index}
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  {task.description}
                  <span class="badge badge-primary badge-pill">
                    Category:{task.category}
                  </span>
                  <span class="badge badge-primary badge-pill">
                    Status:{task.status}
                  </span>
                </li>
              ))}
            </ul>
            <div className="text-center"></div>
          </div>
          <div class="powr-reviews" id="6ba27d8f_1592370663"></div>
          <script src="https://www.powr.io/powr.js?platform=bootstrap"></script>
        </div>
      </div>
    </React.Fragment>
  );
}
