import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Resume from "../assets/Kasen Brugh SWE Resume.pdf";
import "./Comp.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <>
      <style type="text/css">{`.nav-style{
          background-color: rgb(28, 37, 65);
        }`}</style>
      <Navbar className="nav-style">
        <Container>
          <Navbar.Brand
            className="hover-class text-white"
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
                  className="nav-link hover-class text-white"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  About Me
                </Link>
                <Link
                  to="contact-section"
                  className="nav-link hover-class text-white"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  Contact Me
                </Link>
                <Link
                  to="portfolio-section"
                  className="nav-link hover-class text-white"
                  smooth={true}
                  offset={-70}
                  duration={200}
                >
                  Portfolio
                </Link>

                <Nav.Link
                  href={Resume}
                  target="_blank"
                  className="hover-class nav-style text-white"
                >
                  Resume
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
