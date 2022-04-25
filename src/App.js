import React from "react";

import "./styles/normalize.css";
import "./styles/font-awesome.min.css";
import "./styles/style.css";

import Header from "./Partials/Header";

import Features from "./Sections/Features";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Resume from "./Sections/Resume";
import Education from "./Sections/Education";
import Testimonials from "./Sections/Testimonials";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

import Footer from "./Partials/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Features />
      <About />
      <Skills />
      <Resume />
      <Education />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
