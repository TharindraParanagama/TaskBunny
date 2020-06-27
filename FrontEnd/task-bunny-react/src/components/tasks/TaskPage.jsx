import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function TaskPage(props) {
  const [tasks, setTasks] = useState([]);
  const [categ, setCateg] = useState("");
  const [time, setTime] = useState([
    "3 weeks",
    "5 days",
    "4 hours",
    "2 hours",
    "30 minutes",
    "4 weeks",
    "5 weeks",
    "12 hours",
    "15 minutes",
    "8 hours",
    "20 hours",
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (props.location.state.category.category === "All") {
      setCateg("");
    } else if (props.location.state.category.category === "Home") {
      setCateg("House");
    } else {
      setCateg(props.location.state.category.category);
    }

    console.log(`http://13.58.157.19:8081/tasks/${categ}`);
    console.log("Category:", categ);
    /* fetch(`http://13.58.157.19:8081/tasks`, { */
    fetch(`http://13.58.157.19:8081/tasks/${categ}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, [categ]);

  function getTimeFrame() {
    return time[Math.floor(Math.random() * time.length)];
  }

  return (
    <>
      <Container>
        <Row>
          <h1>Tasks: {props.location.state.category.category}</h1>
          {tasks.map((task) => {
            return (
              <TaskList task={task} key={task.taskid} time={getTimeFrame()} />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

// function getMe(e) {
//   e.preventDefault();
//   var token = JSON.parse(localStorage.getItem('token'));
//   console.log(`Authorization=Bearer ${token}`)
//   fetch('/users/me', {
//       method: 'GET',
//       "content-type": "application/json", //might not need
//       headers: {
//           'Authorization': 'Bearer ' + token
//       }
//   })
//       .then(res => res.json())
//       .then(data => {
//           console.log(data)
//           // window.location.href = 'http://localhost:3000/dashboard';
//       })
//       .catch(err => { console.log(err) })
// }
