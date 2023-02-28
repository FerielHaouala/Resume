import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={4}>
        <p style={{ color: "rgb(155 126 172)" }}>
          ICT Engineer
        </p>
        <p style={{ color: "white" }}>
          2021 - Now
        </p>
        <blockquote className="blockquote mb-0">
          <br />
          <p>Higher School of Communication of Tunis SUP'Com</p>
          <br />
        </blockquote>
      </Col>
      <Col xs={5} md={4}>
        <p style={{ color: "rgb(155 126 172)" }}>
          Bachelor in computer science: Network and service administration
        </p>
        <p style={{ color: "white" }}>
          2018 - 2021
        </p>

        <blockquote className="blockquote mb-0">
          <br />
          <p>Higher Institute of Computer Science (ISI)</p>
          <br />
        </blockquote>
      </Col>

      <Col xs={5} md={4}>
        <p style={{ color: "rgb(155 126 172)" }}>
          Mathematics Bachelor
        </p>
        <p style={{ color: "white" }}>
          2014 - 2018
        </p>
        <blockquote className="blockquote mb-0">
          <br />
          <p>Pioneer School of Ariana</p>
          <br />
        </blockquote>
      </Col>



    </Row>
  );
}

export default Toolstack;
