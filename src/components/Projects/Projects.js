import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import IEEE from "../../Assets/Projects/IEEE.jpg";
import NCSC from "../../Assets/Projects/NCSC.jpg";
import SJE from "../../Assets/Projects/SJE.jpg";
import adjointe from "../../Assets/Projects/Adjointe.jpg";

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
              imgPath={SJE}
              isBlog={false}
              title="President of the SUP'COM Junior Enterprise"
              description=""
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IEEE}
              isBlog={false}
              title="ChairWoman of The IEEE ISI SB"
              description="Looking back on my one year as chairwoman of IEEE ISI SB, I am overwhelmed with gratitude for the incredible experience I had. In that short amount of time, I gained invaluable knowledge, met countless new people, and overcame challenges that I never thought I would face.
               This experience has had a profound influence on my life and has set me on a new path that I am excited to pursue.
              To my dear friends who shared this journey with me, I want to express my deepest thanks.
               Each and every one of you made this experience so special and without your support, encouragement, and willingness to work together, I would not have been able to accomplish what I did. I will always treasure the memories we created together and I would jump at the chance to work with you all again in the future."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NCSC}
              isBlog={false}
              title="NCSC Congress Sponsorship Manager"
              description=""
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adjointe}
              isBlog={false}
              title="Project Manager Assistant for SUP'COM JUNIOR ENTREPRISE"
              description=""
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
