import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
