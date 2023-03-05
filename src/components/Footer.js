import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Stack align="middle">
            <h6>
              <span className="text-white">© 2023 Kasen Brugh</span>
            </h6>
          </Stack>
        </Container>
      </Navbar>
    </footer>
  );
}
