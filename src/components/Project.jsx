import React from "react";

const Project = () => {
  const projects = [
    { id: 1, name: "Weather Dashboard", description: "A weather app using OpenWeather API.", link: "https://github.com/VampMina528/Weather-Dashboard" },
    { id: 2, name: "Employee-CMS", description: "A CLI tool for managing employees.", link: "https://github.com/VampMina528/Employee-CMS" },
    { id: 3, name: "React Portfolio", description: "My personal portfolio site.", link: "https://github.com/VampMina528/React-Portfolio-Mina" },
    { id: 4, name: "Vehicles", description: "Vehicle Builder.", link: "https://github.com/VampMina528/Vehicles" },
    { id: 5, name: "README Generator", description: "README Generator.", link: "https://github.com/VampMina528/README-Generator" },
    { id: 6, name: "Bird-Quiz", description: "A collaboration with teammates for bird lovers.", link: "https://github.com/VampMina528/Bird-Quiz" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Projects</h1>

      <div style={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} style={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center" },
  heading: { fontSize: "2rem", marginBottom: "20px" },
  projectList: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" },
  projectCard: { border: "1px solid #ddd", padding: "15px", borderRadius: "8px", width: "250px" }
};

export default Project;
