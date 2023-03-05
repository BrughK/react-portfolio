import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameValid(e.target.value !== "");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) || e.target.value === ""
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || !isEmailValid) {
      setIsNameValid(name !== "");
      setIsEmailValid(email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
      return;
    }
    // TODO: handle form submission
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Card className="my-3 mx-3">
      <Card.Body>
        <Card.Title className="mb-4 display-4 text-center">
          Contact Me!
        </Card.Title>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="border-dark"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              isInvalid={!isNameValid}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="mt-2">Email address</Form.Label>
            <Form.Control
              className="border-dark"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!isEmailValid}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label className="mt-2">Message</Form.Label>
            <Form.Control
              className="border-dark"
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button className="mt-2" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ContactMe;
