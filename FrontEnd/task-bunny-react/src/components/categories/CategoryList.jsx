import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function CategoryList(props) {
  return (
    <>
      <div className="col-md-4" style={{ marginTop: "15px" }}>
        <Card>
          <Card.Img src={props.category.picture} width="350px" />
          <Card.Body>
            <h3>{props.category.category}</h3>
            <Card.Text>{props.category.desc}</Card.Text>
            <Link
              to={{ pathname: "/tasks", state: { category: props.category } }}
            >
              <button className="btn btn-dark" style={{ float: "right" }}>
                Go
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
