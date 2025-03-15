import Project from "../components/Project.js";

export default function Portfolio() {
  const projects = [
    { title: "Project 1", img: "project1.jpg", deploy: "#", repo: "#" },
    { title: "Project 2", img: "project2.jpg", deploy: "#", repo: "#" },
    { title: "Project 3", img: "project3.jpg", deploy: "#", repo: "#" },
    { title: "Project 4", img: "project4.jpg", deploy: "#", repo: "#" },
    { title: "Project 5", img: "project5.jpg", deploy: "#", repo: "#" },
    { title: "Project 6", img: "project6.jpg", deploy: "#", repo: "#" },
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
    padding: "20px",
  },
};
