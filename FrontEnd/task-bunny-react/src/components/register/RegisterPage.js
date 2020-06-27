import React, { useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage(props) {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  function handleChange(event) {
    setCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    var date = new Date();
    var timestamp = date.getTime();

    fetch("http://localhost:8081/usersregister", {
      method: "POST",
      body: JSON.stringify({
        username: userCredentials.username,
        password: userCredentials.password,
        role: "ROLE_CLIENT",
        firstname: userCredentials.firstname,
        lastname: userCredentials.lastname,
        datejoined: timestamp,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    toast.success("Registration successfull");
    props.history.push("/");
  }

  return (
    <div className="jumbotron jumbotron-reg">
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-label-title fontForTitles">
          <h1>Registration</h1>
        </div>
        <br />

        <Form.Group controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter email"
            name="username"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
          />
        </Form.Group>

        <Form.Group controlId="firstname">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter first name"
            name="firstname"
          />
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter last name"
            name="lastname"
          />
        </Form.Group>

        <Link to="/">
          {" "}
          <Button>Cancel</Button>{" "}
        </Link>
        <Button variant="primary" type="submit" style={{ float: "right" }}>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;
