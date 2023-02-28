import React from "react";
import { Col, Row } from "react-bootstrap";
import hack1 from "../../Assets/Metaverse.jpg";
import hack2 from "../../Assets/Jet'impact.jpg";
import hack3 from "../../Assets/Cybersecurity.jpg";
import hack4 from "../../Assets/TICAD.jpg";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={5} className="tech-icons">
        <img
          src={hack1}
          alt="Metaverse Tunisian Summit hackathon"
          style={{ maxHeight: "450px", maxwidth: "450px" }}
        />
        <blockquote className="blockquote mb-0">
          <br />
          <p>Metaverse Tunisian Summit hackathon</p>
          <br />
        </blockquote>
      </Col>
      <Col xs={4} md={5} className="tech-icons">
        <img
          src={hack3}
          alt="Cybersecurity & SMART FACTORY Hackathon"
          style={{ maxHeight: "450px", maxwidth: "450px" }}
        />
        <blockquote className="blockquote mb-0">
          <br />
          <p>Cybersecurity & SMART FACTORY Hackathon</p>
          <br />
        </blockquote>
      </Col>
      <Col xs={4} md={5} className="tech-icons">
        <img
          src={hack4}
          alt="TICAD 8 Innovation «HACK AFRICA AUTOMOTIVE»."
          style={{ maxHeight: "450px", maxwidth: "450px" }}
        />
         <blockquote className="blockquote mb-0">
          <br />
          <p>TICAD 8 Innovation «HACK AFRICA AUTOMOTIVE»</p>
          <br />
        </blockquote>
      </Col>
      <Col xs={4} md={5} className="tech-icons">
        <img
          src={hack2}
          alt="Jet'impact"
          style={{ maxHeight: "450px", maxwidth: "450px" }}
        />
         <blockquote className="blockquote mb-0">
          <br />
          <p>Jet'impact</p>
          <br />
        </blockquote>
      </Col>
    </Row>
  );
}

export default Techstack;
