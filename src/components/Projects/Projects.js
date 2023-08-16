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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={SJE}
              isBlog={false}
              title="President of the SUP'COM Junior Enterprise"
              description={
                <><ul>
                  <li>
                    Led and managed cross-functional teams of developers, designers, and project managers, successfully delivering high-quality software projects within the IT domain.
                    <br /></li>
                  <li>
                    Oversaw diverse projects including website and mobile app development, fostering a deep understanding of technology trends and industry best practices.
                    <br /></li>
                  <li>
                    Developed skills in effective communication, problem-solving, client engagement, and teamwork while cultivating innovation in a fast-paced IT environment.</li>
                </ul>
                </>
              }
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={IEEE}
              isBlog={false}
              title="ChairWoman of The IEEE ISI SB"
              description={
                <><ul>
                  <li>
                    Led and directed diverse projects and events as Chairwoman of IEEE ISI SB, fostering leadership, organizational, and communication skills. </li>
                  <li>
                    Leveraged networking to establish valuable industry relationships, exchanging insights on tech trends and innovation with like-minded professionals. </li>
                  <li>
                    Navigated challenges, improving problem-solving and critical thinking abilities, while maintaining composure and adaptability under pressure."</li>
                </ul>
                </>
              }
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={NCSC}
              isBlog={false}
              title="NCSC Congress Sponsorship Manager"
              description={
                <><ul>
                  <li>
                    Managed sponsor relationships and funding as Sponsorship Manager at NCSC, enhancing skills in effective communication and negotiation.</li>
                  <li>
                    Developed expertise in networking and relationship-building while ensuring sponsors' needs were met, contributing to successful returns on investment.</li>
                  <li>
                    Navigated teamwork dynamics with volunteers, leaders, and sponsors, showcasing adeptness in collaboration and achieving shared objectives.
                  </li>
                </ul>
                </>
              }
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={adjointe}
              isBlog={false}
              title="Project Manager Assistant for SUP'COM JUNIOR ENTREPRISE"
              description={
                <><ul>
                  <li>Supported Project Managers at SUP'COM JUNIOR ENTREPRISE, gaining insights into effective communication, teamwork, and meticulous attention to detail.
                  </li>
                  <li>
                    Collaborated with project teams, aiding in requirement understanding, issue resolution, and solution development for on-time project completion. </li>
                  <li>
                    Managed project timelines, progress tracking, and deadlines, enhancing organizational and time management skills, while contributing to diverse project successes.  </li>
                </ul>
                </>
              }
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
