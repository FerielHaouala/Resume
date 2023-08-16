import React from "react";
import { Col, Row } from "react-bootstrap";
import hack1 from "../../Assets/Metaverse.jpg";
import hack2 from "../../Assets/Jet'impact.jpg";
import hack3 from "../../Assets/Cybersecurity.jpg";
import hack4 from "../../Assets/TICAD.jpg";


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
          <p> First Price </p>
          <p>
            We're combining virtual reality, blockchain, and computer vision to create an amazing solution with endless possibilities</p>
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
          <p> Third place </p>
          <p> Our cybersecurity solution empowers Industry 4.0 through decentralized approaches. Partnering with tech leaders, we unleash limitless potential.</p>

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
          <p> First Price </p>
          <p> We developed a smart troubleshooting app endorsed by the Industrial Minister and Visteon Electronics. It transforms electronics with deep technology advancements</p>
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
          <p> First Price </p>
          <p> Innovative startup leveraging 17 corporate social responsibilities for holistic impact, fostering sustainability, equity, and community well-being.</p>
          <br />
        </blockquote>
      </Col>
    </Row>
  );
}

export default Techstack;
