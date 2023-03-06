import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Resume from "../assets/Kasen Brugh SWE Resume.pdf";
import "./Comp.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            className="hover-class"
            href="https://github.com/BrughK"
            target="_blank"
            rel="noreferrer"
          >
            Kasen Brugh
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link className="hover-class" href="#about-me">
                  About Me
                </Nav.Link>
                <Nav.Link className="hover-class" href="#portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link className="hover-class" href="#contact">
                  Contact Me
                </Nav.Link>
                <Nav.Link className="hover-class" href="#resume">
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    Resume
                  </a>
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
