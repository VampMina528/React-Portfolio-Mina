import React from "react";

export default function Project({ title, description, image, link, pdf }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" style={styles.link}>
          🔗 View on GitHub
        </a>
      )}
      {pdf && (
        <a href={pdf} target="_blank" rel="noopener noreferrer" style={styles.link}>
          📄 View PDF
        </a>
      )}
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "300px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  link: {
    display: "block",
    marginTop: "10px",
    color: "#0077cc",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
