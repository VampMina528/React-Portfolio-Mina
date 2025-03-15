import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";
import HeaderFooter from "./components/HeaderFooter.jsx";

export default function App() {
  return (
    <Router>
      <div style={styles.app}>
        <HeaderFooter />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
};
