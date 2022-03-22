import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Accounting from "../../Assets/Projects/accounting.jfif";
import human from "../../Assets/Projects/human.jfif";
import city from "../../Assets/Projects/cityOfCulture.jfif";

import Instagram from "../../Assets/Projects/insta.jfif";
import Chatbot from "../../Assets/Projects/chatbot.jfif";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            
              imgPath={human}
              isBlog={false}
              title="Human resources"
              description=" Integrated springBoot project for human resources management : enterprise management , employes management , department management ,contract management with (springBoot, maven, log4j, Junit, gitHub, sonar, nexus,jenkins)."
              link="https://github.com/medaminelahbecha/TimesheetF"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={city}
              isBlog={false}
              title="Management of the city of culture"
              description="Integrated multi-platform application for  management of the city of culture  (JavaFX :Desktop Application, Web Application with symfony, Codenameone mobile application) ."
              link="https://github.com/atefkhelifi/EMPIRE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-commerce Website"
              description="build E-commerce website that allows you to buy and sell tangible goods, digital products or services online. Cart and checkout ,Product information management,Order management,Pricing and promotions engines,Statistical"
              link="https://github.com/medaminelahbecha/Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Accounting}
              isBlog={false}
              title="XPR Accounting"
              description="XPR Accounting is a secure platform, an artificial intelligence and a team
              attentive to the treatment of your accounts. It allows you to organize the
              accounting documents, consult the accounting files, follow the performance of
              your company. and generate tax returns. Where you want when you want. with
              Node JS, React JS, MongoDB, bootstrap, sass, redux ."
              link="https://github.com/medaminelahbecha/xprProjet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Instagram}
              isBlog={false}
              title="Instagram"
              description="Build an instagram web site which you can post a publication , follow your favorite persons , like,dislike a post , check your profile ... with nodeJs , reactJs , bootstrap , MongoDB "
              link="https://github.com/medaminelahbecha/insta"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatbot}
              isBlog={false}
              title="Chatbot"
              description="Build an chatbot which you can simulate a conversation with human users or chat robot, especially on the internet with reactJs and bootstrap "
              link="https://github.com/medaminelahbecha/chatBot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
