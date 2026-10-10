import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import AllProjects from "./components/AllProjects";
import AllCertificates from "./components/AllCertificates";
import Contact from "./components/Contact";

// ✅ Home Section Component (added navigation logic here)
const HomeSection = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    // if already on home page, scroll directly
    if (window.location.pathname === "/") {
      scroller.scrollTo("projects", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    } else {
      // otherwise, navigate to home, then scroll
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("projects", {
          duration: 800,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      }, 300);
    }
  };

  return (
    <Element name="home">
      <section className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Hi, I'm{" "}
            <span className="text-purple-600">
              BUDDAIAH VAGAIRA YASWANTH
            </span>
          </h1>
          <p className="text-xl text-gray-600 mt-4">
            Frontend Developer at Mohan Babu University
          </p>
          <button
            onClick={handleViewWork}
            className="mt-8 inline-block px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 cursor-pointer transition duration-300"
          >
            View My Work
          </button>
        </div>
      </section>
    </Element>
  );
};

const App = () => {
  return (
    <Router>
      <div className="relative bg-white text-gray-900">
        <Navbar />

        <Routes>
          {/* ✅ Main Page */}
          <Route
            path="/"
            element={
              <div className="px-8 relative z-10">
                <HomeSection />
                <Element name="about">
                  <AboutMe />
                </Element>
                <Element name="skills">
                  <Skills />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="certificates">
                  <Certificates />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
              </div>
            }
          />

          {/* All Projects Page */}
          <Route path="/all-projects" element={<AllProjects />} />

          {/* All Certificates Page */}
          <Route path="/all-certificates" element={<AllCertificates />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
