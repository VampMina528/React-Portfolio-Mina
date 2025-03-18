export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>
          Connect with me: 
          <a href="#" style={styles.link}> GitHub</a> | 
          <a href="#" style={styles.link}> LinkedIn</a> | 
          <a href="#" style={styles.link}> Twitter</a>
        </p>
      </footer>
    );
  }
  
  const styles = {
    footer: { marginTop: "20px", padding: "1rem", background: "#333", color: "white", textAlign: "center" },
    link: { color: "#007bff", textDecoration: "none", margin: "0 10px" },
  };
  