import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <footer className="">
      <style type="text/css">{`.nav-style{
          background-color: rgb(28, 37, 65);
          color: white;
        }`}</style>
      <Navbar className="nav-style">
        <Container fluid>
          <Stack align="middle">
            <h6>
              <Nav.Link
                href="https://github.com/BrughK"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-white ">© 2023 Kasen Brugh</span>
              </Nav.Link>
            </h6>
          </Stack>
        </Container>
      </Navbar>
    </footer>
  );
}
