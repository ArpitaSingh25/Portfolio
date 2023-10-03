import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arpita Singh </span>
            from <span className="purple"> Patna, India.</span>
            <br />I am currently a sophomore at SRM University in Chennai, where I am studying a Bachelor of Science in Computer Science and Engineering with a 2026 graduation target. 
            <br />
            I'm eager to engage in cutting-edge initiatives and have a good influence in the tech industry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Dance
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arpita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
