import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";

import Agile from "../../Assets/certificates/agile.PNG";
import anglais from "../../Assets/certificates/anglais.PNG";
import francais from "../../Assets/certificates/francais.PNG";
import cloud from "../../Assets/certificates/cloud.PNG";
import devops from "../../Assets/certificates/devops.PNG";
import selenium from "../../Assets/certificates/selenium.PNG";

import CertificateCards from "./CertificateCards";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <CertificateCards
              imgPath={devops}
              isBlog={false}
              title="DevOps Fundamentals"
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificateCards
              imgPath={cloud}
              isBlog={false}
              title="AWS Fundamentals: Going Cloud-Native"
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificateCards
              imgPath={Agile}
              isBlog={false}
              title="Software Processes and Agile Practices"
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificateCards
              imgPath={selenium}
              isBlog={false}
              title="Automation Script Using
              Selenium and Java"
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificateCards
              imgPath={anglais}
              isBlog={false}
              title="English B2"
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificateCards
              imgPath={francais}
              isBlog={false}
              title="French B2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
