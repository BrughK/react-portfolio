import React from "react";
import { Card } from "react-bootstrap";
import Profile from "../assets/profile.png";

function AboutMe() {
  return (
    <Card className="mx-3 my-4">
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={Profile}
            alt="Profile Pic"
            className="image-container rounded mr-3 mb-3"
            style={{ width: "250px", border: "2px solid #222222" }}
          />
        </div>
        <Card.Title className="mb-2 display-3 text-center">About Me</Card.Title>
        <p>
          Hey! My name is Kasen Brugh and I'm a full-stack web developer with
          experience in HTML, CSS, JavaScript, React, and more. I love turning
          complex problems into simple and elegant solutions.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu aliquam
          urna. Nulla et aliquet sem. Phasellus sed consequat turpis. Etiam
          laoreet mauris quis laoreet bibendum. Phasellus rhoncus mi quis sem
          mollis, ut dapibus quam aliquam. Integer tempus tempus imperdiet.
          Quisque ornare at odio vitae congue. Integer dapibus, libero vel
          laoreet iaculis, lorem leo tempor massa, sed rhoncus velit ante nec
          elit. Aenean hendrerit, elit sed porta molestie, nulla velit laoreet
          sem, ac varius nibh lorem vel enim.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;
