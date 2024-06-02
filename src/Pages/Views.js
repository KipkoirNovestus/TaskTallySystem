import React, { PureComponent } from "react";
import { Row, Col } from "react-bootstrap";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import financial3 from "../Components/images/financial3.jpg";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Feb",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Mar",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Aprl",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "May",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "June",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "July",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Agst",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Sept",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Oct",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    name: "Nov",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Dec",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/simple-composed-chart-lyz572";

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row className="px-4 py-5">
            <Col sm="7" className="px-4 py-5">
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="amt"
                      fill="#8884d8"
                      stroke="#8884d8"
                    />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    <Scatter dataKey="cnt" fill="red" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </Col>
            <Col sm="4">
              <h2 class="font-weight-light">LineBarAreaComposedChart</h2>
              <p>
                Here are some ideas for incorporating it into your chores
                management project:
              </p>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Chore Completion Over Time:
                  </Accordion.Header>
                  <Accordion.Body>
                    Plot a line graph showing the cumulative number of completed
                    chores over different time intervals (e.g., days, weeks,
                    months).
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    User Performance Comparison:
                  </Accordion.Header>
                  <Accordion.Body>
                    Generate a LineBarAreaComposedChart to compare the
                    performance of different users in completing chores.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <Container>
          <Card className="bg-primary text-white">
            <Card.Header className="text-center"> Featured</Card.Header>
            <Card.Body>
              <Card.Title className="text-center">
                APIs for Integration:
              </Card.Title>
              <Card.Text className="text-center">
                Prioritize features based on their impact on user experience,
                business requirements, and technical feasibility, considering
                the resources and timeline available for implementation over the
                next two months.
              </Card.Text>
              <Button variant="outline-primary" class="text-center">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Container>
        <Container className="py-4">
          <Row className="px-4 py-4">
            <Col sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={financial3} />
                <Card.Body>
                  <Card.Title>Client Management</Card.Title>
                  <Card.Text>
                    We want to take a moment to update you on some important
                    developments from our Client Management team. As part of our
                    ongoing commitment to enhancing our services, We have...
                  </Card.Text>
                  <Button variant="outline-primary ">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={financial3} />
                <Card.Body>
                  <Card.Title>Project Management</Card.Title>
                  <Card.Text>
                    We want to take a moment to update you on some important
                    developments from our Project Management team. As part of
                    our ongoing commitment to enhancing our services, We have...
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
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
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}
