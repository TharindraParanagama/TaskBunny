import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>404. Page not found (you asked for the wrong resource)</h1>
      <Link to="/home">
        <button className="btn btn-warning">Back to home</button>
      </Link>
    </>
  );
}

export default NotFoundPage;
