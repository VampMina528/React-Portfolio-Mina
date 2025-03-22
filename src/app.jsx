import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Resume from "./components/Resume";
import Aboutme from "./components/aboutme"; 
import "./app.css"; 
import reactLogo from "./reactLogo.png";

function App() {
  return (
    <>
      <Header />
      <main>
        <img
          src={reactLogo}
          alt="react logo"
          style={{ width: "100px", display: "block", margin: "0 auto" }}
        />
        <Routes>
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
