import Project from "../components/Project.js";

export default function Portfolio() {
  const projects = [
    { title: "Weather-Dashboard", img: "./public.weather.png", deploy: "#", repo: "#https://github.com/VampMina528/Weather-Dashboard" },
    { title: "Pets-Who Team Collaboration", img: "./public.petswho.jpg", deploy: "#", repo: "#https://github.com/Falmanza94/pets-who" },
    { title: "EmployeeCMS", img: "./public.EmployeeCMS.jpg", deploy: "#", repo: "#https://github.com/VampMina528/Employee-CMS" },
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
