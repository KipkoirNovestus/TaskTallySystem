import Header from "../Components/Header";
import { Container, Row, Col, Image } from "react-bootstrap";
import tracking from "../Components/images/tracking.jpg";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import timetracking1 from "../Components/images/timetrack1.png";
import timetracking2 from "../Components/images/timetracking2.jpg";
import timetracking3 from "../Components/images/timetracking3.webp";
import Footer from "../Components/Footer";

const Tracking = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="px-4 py-5">
          <Col sm="5" className="px-2 py-4">
            <h2 class="font-weight-light">Why Tracking?</h2>
            <p class="mt-4">
              Many location-based services rely on device tracking to provide
              personalized experiences or targeted advertisements based on a
              user's location.
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Submit</Button>
            </Form>
          </Col>
          <Col sm="7">
            <Image src={tracking} rounded className="w-100" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="d-flex justify-content-around">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={timetracking1} />
            <Card.Body>
              <Card.Title>UPS SurePost Tracking</Card.Title>
              <Card.Text>
                UPS offer a wide range of delivery services allowing customers
                to post packages of all shape and size via their networks. From
                Ground shipping to Express, small packages dropped at Access
                Points to pallets using Freight networks
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={timetracking2} />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={timetracking3} />
            <Card.Body>
              <Card.Title>AliExpress Tracking</Card.Title>
              <Card.Text>
                After paying for the order on the Aliexpress trading platform,
                the seller packages your staff for transportation and hands it
                over to the postal company. Which courier company will deliver
                your goods depends on the method chosen before payment
              </Card.Text>

              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
      <Container className="py-5">
        <div class="bg-primary rounded py-5 px-5 text-white">
          <div class="row">
            <div class="col">
              <blockquote class="blockquote">
                <i class="mb-0">
                  "Track your progress relentlessly; it's the compass that
                  guides your business through the journey of success."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Tracking;
