import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
function BookDemo() {
  return (
    <div>
      <>
        <Header />
        <Container>
          <Row className="px-4 py-5">
            <Col sm="6 py-5" className="px-2 py-4">
              <h2 class="font-weight-light">
                <u class="text-primary">Book a </u> Demo
              </h2>
              <p class="mt-4">
                See Bonsai in action with a personalized walkthrough by one of
                our experts.
              </p>
              <ul>
                <li>
                  See real use cases in action — client management, project
                  delivery reporting, and more.
                </li>
                <li>
                  Save time and make the right decision with instant answers to
                  all your questions.
                </li>
                <li>
                  Get one-on-one onboarding assistance to set up your account
                  and team for success.
                </li>
              </ul>
            </Col>
            <Col sm="6 py-5">
              <Form>
                <h4>
                  <u class="text-primary">Get a </u>Demo
                </h4>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    What's your work email?This question is required.*
                  </Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="outline-primary">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <div class="bg-secondary rounded py-5 px-5 text-white">
            <div class="row">
              <div class="col">
                <blockquote class="blockquote">
                  <h3>
                    <i class="mb-0">
                      Trusted by thousands of agencies & consultancies based on
                      1,000+ reviews from
                    </i>
                  </h3>
                </blockquote>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    </div>
  );
}

export default BookDemo;
