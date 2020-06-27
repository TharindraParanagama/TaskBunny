import React, { useState, useEffect } from "react";

import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "./../../Assets/TB_LOGO.png";

function LoginPage(props) {
  const [userCredentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("redirect")) {
  //     setRedirect(false);
  //     localStorage.setItem("redirect", false);
  //     props.history.push("/home");
  //   }
  // }, []);

  function handleChange(event) {
    setCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://13.58.157.19:8081/authenticate", {
      method: "POST",
      body: JSON.stringify({
        // Username of a user on the WordPress website in which the REST API request
        // is being made to.
        username: userCredentials.username,
        // And the above user's password.
        password: userCredentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.jwt);
        toast.success("Log In Successful");
        props.history.push("/home");
      }).catch(
        // toast.error("Invalid username/passwordz")
      );

    
    // setRedirect(true);
    // localStorage.setItem("redirect", true);
    // window.location.reload(false);
    
  }

  return (
    <div className="jumbotron">
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-label-title fontForTitles">
          <img src={logo} alt="Logo" className="center" />;
        </div>
        <br />
        <Form.Group controlId="username">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            type="plaintext "
            placeholder="Enter user name"
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
        <Link to="/register"> Not yet registered? click here to sign up!</Link>
        <Button variant="primary" type="submit" style={{ float: "right" }}>
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;

//  function getMe(e) {
//     e.preventDefault();
//     var token = JSON.parse(localStorage.getItem('token'));
//     console.log(`Authorization=Bearer ${token}`)
//     fetch('/users/me', {
//         method: 'GET',
//         "content-type": "application/json", //might not need
//         headers: {
//             'Authorization': 'Bearer ' + token
//         }
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             // window.location.href = 'http://localhost:3000/dashboard';
//         })
//         .catch(err => { console.log(err) })
// }
