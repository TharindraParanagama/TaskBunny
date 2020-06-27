import React, { useState, useEffect } from "react";
import Axios from "axios";
import JWTD from "jwt-decode";

export default function RoleRendering() {
  const token = localStorage.getItem("token");
  const username = JWTD(token).sub;
  useEffect(() => {
    Axios.get("http://13.58.157.19:8081/role/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((result) => localStorage.setItem("role", result.data))
      .catch((err) => console.log("error username:" + err));
  }, []);
  return <React.Fragment></React.Fragment>;
}
