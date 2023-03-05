import React from "react";
import { Card, Button } from "react-bootstrap";

const Project = (props) => {
  const { title, image, description, deployedLink, githubLink } = props;

  return (
    <Card className="mt-3 mb-5 mx-3 p-1">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="success" href={deployedLink} target="_blank">
          Deployed Link
        </Button>{" "}
        <Button variant="dark" href={githubLink} target="_blank">
          GitHub Link
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
