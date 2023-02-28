import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Feriel HAOUALA </span>
            from <span className="purple">Ariana, Tunis.</span>  <br />
            <br />I am an ICT Engineering Student in Higher School of Communication of Tunis SUP'Com .<br />
             <br />
            I thrive on new challenges and am eager to take initiative and foster collaboration across departments. With a strong ability to manage tech teams and ensure effective communication among stakeholders using Lean-Agile methodologies like Scrum, I am well-suited to contribute to the success of an organization and develop my abilities in a new professional experience. 
            <br /><br />
            
            
            In the long term, I aspire to coordinate the introduction of new technologies to benefit my country.            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Journaling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Feriel HAOUALA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
