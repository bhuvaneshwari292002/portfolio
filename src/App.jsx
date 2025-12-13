import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
