import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <h1 style={styles.text}>Aspiring Software Developer</h1>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  },
  text: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "normal",
    color: "#333",
  },
};

export default Footer;
