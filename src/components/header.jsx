import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <h1>Mina's Portfolio</h1>
      <nav>
        <NavLink to="/" end style={styles.navLink}>About Me</NavLink>
        <NavLink to="/portfolio" style={styles.navLink}>Portfolio</NavLink>
        <NavLink to="/resume" style={styles.navLink}>Resume</NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: { background: "#333", color: "white", padding: "1rem", textAlign: "center" },
  navLink: { margin: "0 15px", color: "white", textDecoration: "none" },
};
