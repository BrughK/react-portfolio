import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { CardGroup, Row, Col, Card } from "react-bootstrap";
import SQLGif from "../src/assets/18-nosql-homework-demo-02.gif";
import PWAGif from "../src/assets/19-pwa-homework-demo-01.gif";
import ORMGif from "../src/assets/13-orm-homework-demo-01.gif";
import READPic from "../src/assets/readme pic.png";
import Currency from "./assets/127.0.0.1_5500_index.html (1).png";
import Search from "./assets/search.png";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import React from "react";
import { Element } from "react-scroll";

function App() {
  return (
    <div className=" yup-class" style={{ minHeight: "100vh" }}>
      <style type="text/css">{`.yup-class{
        background-color: rgb(58, 80, 107);
        overflow: hidden;
      }
      .card-bg{
        background-color: rgba(192, 215, 235, 0.842);
      }`}</style>
      <Header />
      {/* About-Me scroll */}
      <Element name="about-section">
        <AboutMe />
      </Element>
      {/* Contact Scroll */}
      <Element name="contact-section">
        <ContactMe />
      </Element>
      {/* Projects Scroll */}
      <Element name="portfolio-section">
        <Card className="card-bg mx-3 my-4">
          <CardGroup className="mt-5 d-flex justify-content-center ">
            <h1 className="text-center display-4">My Projects</h1>
            <Row className="justify-content-center">
              <Col sm={12} md={4}>
                <Project
                  title="Currency Converter"
                  image={Currency}
                  description="This online currency converter allows users to convert USD to different currencies by selecting a country's currency from a drop-down menu and clicking the (Get Exchange Rate) button. The website also includes a link to a separate page with a chart of various cryptocurrencies and their current prices."
                  deployedLink="https://brughk.github.io/Project-1/"
                  githubLink="https://github.com/BrughK/Project-1"
                />
              </Col>
              <Col sm={12} md={4}>
                <Project
                  title="Professional README Generator"
                  image={READPic}
                  description="A command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package."
                  deployedLink="https://drive.google.com/file/d/1RY82-dnpIAcmPad5C7kD6I_1W4N5nc4b/view"
                  githubLink="https://github.com/BrughK/Pro-README-Generator"
                />
              </Col>
              <Col sm={12} md={4}>
                <Project
                  title="J.A.T.E PWA Text Editor"
                  image={PWAGif}
                  description="A text editor that runs in the browser, the app also is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline."
                  deployedLink="https://kasen-txt-edit.herokuapp.com/"
                  githubLink="https://github.com/BrughK/Text-Editor-PWA"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={12} md={4}>
                <Project
                  title="Social Network API"
                  image={SQLGif}
                  description="API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application is using a MongoDB backend to store data."
                  deployedLink="https://drive.google.com/file/d/1WtsRhg4mMoS8IYPDTT3S4QLJXwjXlpDr/view"
                  githubLink="https://github.com/BrughK/Social-Network-API"
                />
              </Col>
              <Col sm={12} md={4}>
                <Project
                  title="E-Commerce Backend"
                  image={ORMGif}
                  description="Back end for E-Commerce site using Express.js API and configured to use Sequelize to interact with a MySQL database."
                  deployedLink="https://drive.google.com/file/d/1CBAh_YLgAQOh5SSstdPyV_6rmjH1KRVd/view"
                  githubLink="https://github.com/BrughK/E-commerce-Back-End"
                />
              </Col>
              <Col sm={12} md={4}>
                <Project
                  title="CFB Roster Builder"
                  image={Search}
                  description="The CFB Roster Builder is a full stack application that allows users to stay up to date with their favorite players. Through technologies such as SQL and HandleBars.JS this application uses cutting edge tech."
                  deployedLink="https://cfb-roster-builder.herokuapp.com/"
                  githubLink="https://github.com/BrughK/CFB-Roster-Builder"
                />
              </Col>
            </Row>
          </CardGroup>
        </Card>
      </Element>
      <Footer />
    </div>
  );
}

export default App;
