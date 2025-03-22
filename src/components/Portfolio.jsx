import Project from "../components/Project.jsx";

export default function Portfolio() {

  return (
    <div>
     
      <div style={styles.grid}>
        <Project />

      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "(auto-fit, minmax(200px, 1fr))",
    gap: "10px",
    padding: "20px",
  },
};
