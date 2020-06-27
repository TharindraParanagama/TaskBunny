import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import CardColumns from "react-bootstrap/CardColumns";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import logo_0 from "./../../Assets/carousel_01.jpg";
import logo_1 from "./../../Assets/carousel_02.jpg";
import logo_2 from "./../../Assets/carousel_03.jpg";
import logo from "./../../Assets/TB_LOGO.png";
import card_0 from "./../../Assets/card_01.jpg";
import card_1 from "./../../Assets/card_02.jpg";
import card_2 from "./../../Assets/card_03.jpg";
import Role from "../../Pages/role";
import tech_0 from "./../../Assets/tech_used_001.png";
import tech_1 from "./../../Assets/tech_used_002.png";
import tech_2 from "./../../Assets/tech_used_003.png";
import tech_3 from "./../../Assets/tech_used_004.png";
import tech_4 from "./../../Assets/tech_used_005.png";
import tech_5 from "./../../Assets/tech_used_006.png";
import tech_6 from "./../../Assets/tech_used_007.png";
import tech_7 from "./../../Assets/tech_used_008.png";
import tech_8 from "./../../Assets/tech_used_009.png";
import tech_9 from "./../../Assets/tech_used_010.png";

export default function HomePage() {
  const token = localStorage.getItem("token");
  if (token != null) {
    return (
      <>
        <Role />
        <Container>
          <Row>
            <br />
          </Row>
          <Row>
            <Col>
              <br />
              <div className="welcomeline">
                <img src={logo} alt="Logo" className="center" />;
                <hr />
                <h6>
                  Have more time for yourself, let someone else do your other
                  tasks
                </h6>
              </div>
            </Col>
            <Col>
              <Container fluid>
                <Row>
                  <h5>Technologies Used:</h5>
                </Row>
                <Row>
                  <Col>
                    <Image src={tech_3} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_1} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_0} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_2} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_8} rounded fluid />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Image src={tech_5} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_4} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_6} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_7} rounded fluid />
                  </Col>
                  <Col>
                    <Image src={tech_9} rounded fluid />
                  </Col>
                </Row>
                <hr />
              </Container>
            </Col>
          </Row>

          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo_0}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo_1}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo_2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <p>
                Some bunny once told me the world is gonna roll me I ain't the
                sharpest tool in the shed She was looking kind of dumb with her
                finger and her thumb In the shape of an "L" on her forehead
                Well, the years start coming and they don't stop coming Fed to
                the rules and I hit the ground running Didn't make sense not to
                live for fun Your brain gets smart but your head gets dumb So
                much to do, so much to see So what's wrong with taking the
                backstreets? You'll never know if you don't go You'll never
                shine if you don't glow Hey now, you're an all star Get your
                game on, go play Hey now, you're a rock star Get the show on,
                get paid And all that glitters is gold Only shooting stars break
                the mold
              </p>
            </Col>

            <br />
          </Row>
          <hr />
          <br />
          <Row>
            <CardColumns>
              <Card>
                <Card.Img variant="top" src={card_0} />
                <Card.Body>
                  <Card.Title>
                    What’s the number one item shipped by amazon? Cardboard
                    boxes
                  </Card.Title>
                  <Card.Text>
                    Do you believe in love at first sight—or should I walk by
                    again?
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Let me guess, your middle name is Gillette, right? Because
                    you're the best a man can get!
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card>
                <Card.Img variant="top" src={card_1} />
                <Card.Body>
                  <Card.Title>
                    “If I had my life to live over again, I’d be a plumber.” –
                    Albert Einstein
                  </Card.Title>
                  <Card.Text>
                    My love for you is like diarrhea, I just can't hold it in.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>Do you like Star Wars? Because Yoda only one for me!</p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Old Joke</Card.Title>
                  <Card.Text>
                    Why do Java programmers hate holidays? Because there are no
                    classes{" "}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img src={card_2} />
                <Card.Body>
                  <Card.Title>
                    Finally! Looks like my 'Rinse Charming' has arrived.
                  </Card.Title>
                  <Card.Text>
                    Feel my shirt. Know what it’s made of? Boyfriend material.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    If you were a burger at McDonald's, you'd be named the
                    McGorgeous!
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Real Happiest Place on Earth</Card.Title>
                  <Card.Text>
                    They say Disneyland is the happiest place on earth. Well
                    apparently, no one has ever been standing next to you.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardColumns>
          </Row>
        </Container>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3 purps">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: Some Bunny Once Told
              Me
            </MDBContainer>
          </div>
        </MDBFooter>
      </>
    );
  } else {
    return <h1></h1>;
  }
}
