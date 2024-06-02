import Header from "../Components/Header";
import { Button, Container, Card, Row, Col, Image } from "react-bootstrap";
import Product1 from "../Components/images/product1.webp";
import client1 from "../Components/images/client1.jpg";
import project4 from "../Components/images/product4.webp";
import project5 from "../Components/images/project5.jpg";
import financial3 from "../Components/images/financial3.jpg";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Footer from "../Components/Footer";

const Services = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="px-4 py-5">
          <Col sm="7">
            <Image src={Product1} fluid rounded className="" />
          </Col>
          <Col sm="5">
            <h2 class="font-weight-light">
              Keep your projects on track and on budget
            </h2>
            <p class="mt-4">
              Assign tasks to your team, prioritize your week and see exactly
              how your projects are progressing.
            </p>
            <Button variant="outline-primary">Start free</Button>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <div class="bg-primary rounded py-5 px-5 text-white">
          <div class="row">
            <div class="col">
              <blockquote class="blockquote">
                <i class="mb-0">
                  "Agencies as part of your business ecosystem can provide
                  access to specialized skills, resources, and expertise that
                  can help drive growth, innovation, and success."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-4">
        <Row className="px-4 py-4">
          <Col sm="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={client1} />
              <Card.Body>
                <Card.Title>Client Management</Card.Title>
                <Card.Text>
                  We want to take a moment to update you on some important
                  developments from our Client Management team. As part of our
                  ongoing commitment to enhancing our services, We have...
                </Card.Text>
                <Button variant="outline-primary ">Get started!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={project5} />
              <Card.Body>
                <Card.Title>Project Management</Card.Title>
                <Card.Text>
                  We want to take a moment to update you on some important
                  developments from our Project Management team. As part of our
                  ongoing commitment to enhancing our services, We have...
                </Card.Text>
                <Button variant="outline-primary">Get started!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={financial3} />
              <Card.Body>
                <Card.Title>Financial Management</Card.Title>
                <Card.Text>
                  We want to take a moment to update you on some important
                  developments from our Financial Management team. As part of
                  our ongoing commitment to enhancing our services, We have...
                </Card.Text>
                <Button variant="outline-primary">Get started!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 py-4">
          <Col sm="8">
            <h2>Frequently asked question</h2>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Click Me
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <h2>
                  How do I use Bonsai Task Management to track project progress?
                </h2>
                <p>
                  Task Management allows you to segment your project into a set
                  of reusable task templates that you can bill time against,
                  track milestones against, or invite collaborators on whenever
                  necessary. Our task management software can help you stay
                  organized, bill quicker and ultimately, recognize more
                  revenue!
                </p>
              </div>
            </Collapse>
          </Col>
          <Col sm="4">
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={project4} />
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
