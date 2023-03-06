import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Resume from "../assets/Kasen Brugh SWE Resume.pdf";
import "./Comp.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
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
              {/* React Scroll NPM */}
              <Link
                to="about-section"
                className="nav-link hover-class"
                smooth={true}
                offset={-70}
                duration={200}
              >
                About Me
              </Link>
              <Link
                to="portfolio-section"
                className="nav-link hover-class"
                smooth={true}
                offset={-70}
                duration={200}
              >
                Portfolio
              </Link>
              <Link
                to="contact-section"
                className="nav-link hover-class"
                smooth={true}
                offset={-70}
                duration={200}
              >
                Contact Me
              </Link>
              <Nav.Link href={Resume} target="_blank" className="hover-class">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
