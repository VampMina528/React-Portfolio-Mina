import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import AboutMe from "./components/aboutme"; 
import "./app.css"; 
import reactLogo from "./reactLogo.png";

function App() {
  return (
    <>
      <Header />
      <main>
        <img src={reactLogo} alt="react logo" style={{ width: "100px", display: "block", margin: "0 auto" }} />
        <title>Aspiring Software Developer</title>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
