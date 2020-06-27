import React, { useState, useEffect } from "react";
import TaskInFocus from "./TaskInFocus";
import task1 from "../../Assets/task-1.jpg";
import task2 from "../../Assets/task-2.jpg";
import task3 from "../../Assets/task-3.jpg";
import task4 from "../../Assets/task-4.jpg";
import task5 from "../../Assets/task-5.jpg";

export default function TaskView(props) {
  const [task, setTask] = useState([]); /* Will this be an array or object? */

  const [image, setImage] = useState([task1, task2, task3, task4, task5]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://13.58.157.19:8081/task/${props.location.state.task.taskid}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }) /* Need to click on a link for this to work correctly */
      .then((response) => response.json())
      .then((data) => {
        console.log("Task", data);
        setTask(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function getImage() {
    return image[Math.floor(Math.random() * image.length)];
  }

  return (
    <>
      <h1>Task</h1>
      <TaskInFocus
        task={task}
        time={props.location.state.time}
        image={getImage()}
        firstName={props.location.state.clientFirst}
        lastName={props.location.state.clientLast}
      />
    </>
  );
}
