import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/istoreApp.png";
import leaf from "../../Assets/Projects/istoreWeb.png";
import emotion from "../../Assets/Projects/movingCar.png";
import editor from "../../Assets/Projects/switch.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

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
              imgPath={leaf}
              isBlog={false}
              title="iStore - Website"
              description="Built an online store using MongoDB, Express.js, React.js, and Node.js. Added features like login, password reset, and secure payments. Made it easy to find products and optimized performance for a smooth experience. Kept the code clean and secure with responsive design."
              ghLink="https://github.com/LokeshKhandelwal/istore-Mern"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="iStore - App"
              description="Created a mobile shopping app for iOS and Android. Customized user profiles for regular and admin users.    Built with ReactNative, Redux, MongoDB, Express, and NodeJS, making it easy to use and ready for future updates."
              ghLink="https://github.com/LokeshKhandelwal/iStoreWebApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/LokeshKhandelwal/chitChat"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="iBlog"
              description="Highlighting my design expertise: Check out my latest blog template, created with HTML, CSS, and JavaScript. This sample serves to exhibit my skills in CSS and design. Ready to elevate your portfolio with sleek and effective web solutions."
              ghLink="https://github.com/LokeshKhandelwal/blog"
              demoLink="https://lokeshkhandelwal.github.io/blog/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Switch.io"
              description="Dark Mode is an extension that helps you quickly turn the screen (browser) to dark at night time. Toolbar button
              serves as an ON—OFF switch which enables you to easily and quickly turn the extension ON or OFF."
              ghLink="https://github.com/LokeshKhandelwal/Chrome-Extension-DarkMode"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Moving Car simulation"
              description="Experience the joy of coding through this interactive car simulation. Designed to entertain and educate, it transforms learning HTML, CSS, and JavaScript into an enjoyable and rewarding experience"
              demoLink="https://lokeshkhandelwal.github.io/Moving-Car-WEB-DEVELOPMENT/"
              ghLink="https://github.com/LokeshKhandelwal/Moving-Car-WEB-DEVELOPMENT"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
