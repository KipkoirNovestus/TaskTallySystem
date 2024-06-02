import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import template1 from "../Components/images/template1.webp";
import template2 from "../Components/images/template2.webp";
import template3 from "../Components/images/template3.webp";
import template4 from "../Components/images/template4.webp";

function Templates() {
  return (
    <div>
      <>
        <Header />
        <Container>
          <Row className="px-4 py-5">
            <Col sm="7" className="px-4 py-5">
              <h2 class="font-weight-light">Client Contract Template</h2>
              <p class="mt-4">
                Fully editable with standard terms and clauses. Send and e-sign
                it online.
              </p>
              <div class="container">
                <div class="row">
                  <div class="col-auto">
                    <button type="button" class="btn btn-primary">
                      Get Template
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="4" className="px-7 py-5 ">
              <Carousel slide={false}>
                <Carousel.Item>
                  <Image src={template1} rounded className="w-50" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={template2} rounded className="w-50" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={template3} rounded className="w-50" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={template4} rounded className="w-50" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <div class="bg-primary rounded py-5 px-5 text-white text-center">
            <div class="row">
              <div class="col">
                <blockquote class="blockquote">
                  <h4 class="mb-0">Trusted by 500,000+ business owners</h4>
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

export default Templates;
