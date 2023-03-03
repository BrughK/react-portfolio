import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import AboutMe from "./components/AboutMe";
// import Portfolio from "./components/Portfolio";
// import ContactMe from "./components/ContactMe";
// import Projects from "./Projects";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      {/* <section className="sec about-me-sec visible">
        <AboutMe />
      </section>
      <section className="sec portfolio-me-sec hidden">
        <Portfolio projects={Projects} />
      </section>
      <section className="sec contact-me-sec hidden">
        <ContactMe />
      </section>
      <Footer /> */}
    </div>
  );
}

export default App;
