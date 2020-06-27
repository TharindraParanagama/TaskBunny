import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import JWTD from "jwt-decode";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import laundryCategory from "../../Assets/laundry-category.jpg";

function TaskInFocus(props) {
  const [dummyTask, setDummyTask] = useState({
    img: laundryCategory,
    name: "Plumbing Help Needed",
    client: "Sarah Washington",
    description: "Redoing bathroom and need help outfitting plumbing",
    price: 300,
    rating: 5.0,
    category: "Home Repair",
    duration: "3 weeks",
  }); /* Dummy Data */
  const [providerID, setProviderID] = useState(0);
  //const [task, setTask] = useState([]);
  const token = localStorage.getItem("token");
  const username = JWTD(token).sub;

  function handleClick(e) {
    console.log("http://13.58.157.19:8081/users/userByname/" + username);
    console.log("http://13.58.157.19:8081/tasks/provider/" + props.task.taskid);

    //Get providers id using their username
    Axios.get("http://13.58.157.19:8081/users/userByname/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => {
        console.log("Getting Provider's ID", result.data[0]);
        setProviderID(result.data[0]);
        console.log("set Provider ID", providerID);
      })
      .catch((err) => console.log("error username:" + err));

    //update task to make status  "in progress"
    /* Axios.put(
      "http://13.58.157.19:8081/tasks/provider/" + props.task.taskid,
      JSON.stringify({
        //taskid: props.task.taskid,
        name: props.task.name,
        category: props.task.category,
        description: props.task.description,
        status: props.task.status, //"pending",
        amountpaid: props.task.amountpaid,
        clientid: props.task.clientid,
        providerid: providerID,
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((result) => console.log(result))
      .catch((err) => console.log("error role:" + err)); */

    //using Put Request with Fetch to change providerid
    fetch(`http://13.58.157.19:8081/tasks/provider/${props.task.taskid}`, {
      method: "PUT",
      body: JSON.stringify({
        //taskid: props.task.taskid,
        name: props.task.name,
        category: props.task.category,
        description: props.task.description,
        status: props.task.status, //"pending",
        amountpaid: props.task.amountpaid,
        clientid: props.task.clientid,
        providerid: providerID,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      //.then((res) => res.json())
      .then((resp) => resp.text())
      .then(console.log)
      .then((res) => console.log("Success"))
      .catch((err) => console.log(err));

    //Updating status
    fetch(`http://13.58.157.19:8081/tasks/status/${props.task.taskid}`, {
      method: "PUT",
      body: JSON.stringify({
        //taskid: props.task.taskid,
        name: props.task.name,
        category: props.task.category,
        description: props.task.description,
        status: "pending",
        amountpaid: props.task.amountpaid,
        clientid: props.task.clientid,
        providerid: providerID,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.text())
      .then(console.log)
      .then((res) => console.log("Success"))
      .catch((err) => console.log(err));

    toast.success("Task Picked Up");
    props.history.push("/categories");
  }

  return (
    <>
      {/* <section>
        <img src={props.task.img} alt={props.task.name} />
        <p>{props.task.description}</p>
        <h2>{props.task.name}</h2>
        <h3>{props.task.client}</h3>
      </section>
      <section>
        <p>{props.task.description}</p>
        <p>{props.task.duration}</p>
        <p>{props.task.rating}</p>
      </section>
      <Link
        to={{
          pathname: `/provider tasks`,
        }}
      >
        <button className="btn btn-success">Pick Up Task</button>
      </Link> */}

      {/* =============================== */}
      <div className="container-fluid">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img src={props.image} alt={props.task.name} />
              <Card.Body>
                <h2>{props.task.name}</h2>
                <h5>
                  {props.firstName} {props.lastName}{" "}
                  <span
                    className="badge badge-warning"
                    style={{ fontSize: "13px" }}
                  >
                    Rating: {dummyTask.rating.toFixed(1)}
                  </span>
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                  ${props.task.amountpaid}
                </p>
                <p>{props.task.description}</p>
                <p style={{ color: "green" }}>{props.time}</p>
                {/* <Link
                  to={{
                    pathname: `/provider tasks`,
                  }}
                  onClick={handleClick}
                > */}
                <button
                  className="btn btn-success"
                  style={{ float: "right" }}
                  onClick={handleClick}
                >
                  Pick Up Task
                </button>
                {/* </Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default withRouter(TaskInFocus);

/* Conditionally Render Button to be Pick Up Task, In Progress, or Finished? */
/* Do Database query to add Task to provider */
/* Give the state of the task to the provider and make a database query, or just a database query */
