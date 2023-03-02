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
              description="As the president of SupCom Junior Enterprise in the IT domain, I had a great experience that allowed me to develop a range of skills. Over the course of my tenure, I learned how to lead a team of developers, designers, and project managers to deliver high-quality software projects. I was responsible for overseeing a variety of projects, including website development, mobile application development, and software engineering, and I gained a deep understanding of the latest technology trends and best practices in the IT industry.

              This experience taught me the importance of effective communication, problem-solving, and time management. I learned how to work with clients to understand their needs and requirements and translate them into actionable plans for my team. I also gained a new appreciation for the importance of collaboration, teamwork, and innovation in the fast-paced and constantly evolving world of IT.
              
              Overall, my time as president of SupCom Junior Enterprise was an incredible experience that helped me to grow both personally and professionally. It allowed me to develop a diverse range of skills that are essential for success in the IT industry, and I am grateful for the opportunity to have been a part of such an amazing organization."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IEEE}
              isBlog={false}
              title="ChairWoman of The IEEE ISI SB"
              description="Looking back on my one year as chairwoman of IEEE ISI SB, I am overwhelmed with gratitude for the incredible experience I had and the added value it brought to my life. During my tenure, I had the opportunity to lead and manage various projects and events that helped me develop my leadership, organizational, and communication skills.

              Moreover, the experience allowed me to gain a deeper understanding of the importance of networking and building relationships with others in the industry. I met countless new people who shared my passion for technology and innovation, and I learned a great deal from them about the latest trends and developments in the field.
              
              Along the way, I also faced several challenges that helped me develop my problem-solving and critical thinking skills. These experiences taught me to remain calm and focused under pressure, and to persevere even when things didn't go as planned.
              
              To my dear friends who shared this journey with me, I am grateful for the added value you brought to this experience. Your support, encouragement, and willingness to work together were essential to our success, and I will always treasure the memories we created together. The experience has set me on a new path that I am excited to pursue, and I would jump at the chance to work with you all again in the future."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NCSC}
              isBlog={false}
              title="NCSC Congress Sponsorship Manager"
              description="As the Sponsorship Manager in the NCSC (National Cyber Security Congress), I had an incredible experience that allowed me to develop a range of valuable skills. Over the course of my tenure, I learned how to communicate effectively with sponsors and negotiate deals to secure funding for the Congress. I was responsible for managing relationships with sponsors, ensuring that their needs and requirements were met, and that they received the expected return on investment.

              My role as a Sponsorship Manager also gave me the opportunity to gain a deep understanding of the importance of networking, building relationships, and the value of teamwork. I learned how to work with a diverse group of people, including volunteers, team leaders, and sponsors, to achieve a common goal. Additionally, my experience taught me the importance of attention to detail, organization, and time management in ensuring that the Congress ran smoothly.
              
              Overall, my time as a Sponsorship Manager in the NCSC was an incredible learning experience that allowed me to grow both personally and professionally. It gave me the opportunity to develop a range of skills that are essential for success in any field, including communication, negotiation, and project management. I am proud of my contributions to the success of the Congress, and I gained valuable experience that will serve me well in my future endeavors.
              
              
              
              "
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adjointe}
              isBlog={false}
              title="Project Manager Assistant for SUP'COM JUNIOR ENTREPRISE"
              description="My role as a Project Manager Assistant gave me the opportunity to gain a deep understanding of the importance of effective communication, teamwork, and attention to detail. I learned how to work with the project manager and team members to understand project requirements, identify potential issues, and develop solutions to overcome them. Additionally, my experience taught me the importance of organization and time management in ensuring that projects were completed successfully and on time.
              During my mandate, I learned how to assist project managers in planning and executing various projects, including market research, financial analysis, and consulting services. I was responsible for managing project timelines, tracking project progress, and ensuring that deadlines were met.
              Overall, my time as a Project Manager Assistant for SUP'COM JUNIOR ENTREPRISE was an incredible learning experience that allowed me to grow both personally and professionally. It gave me the opportunity to develop a range of skills that are essential for success in project management, including communication, problem-solving, and time management. I am proud of my contributions to the success of various projects and I gained valuable experience that will serve me well in my future endeavors."
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
