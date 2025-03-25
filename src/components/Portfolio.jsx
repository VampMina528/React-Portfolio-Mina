import Project from "../components/Project.jsx";

import PortfolioScreenshot from '../assets/PortfolioScreenshot.png';

import WeatherDashboardPDF from '../assets/WeatherDashboard.pdf';
import EmployeeCMSPDF from '../assets/EmployeeCMS.pdf';
import VehicleBuilderPDF from '../assets/VehicleBuilder.pdf';
import READMEGeneratorPDF from '../assets/READMEGenerator.pdf';
import BirdsPDF from '../assets/Birds.pdf';

const projects = [
  {
    title: "Weather Dashboard",
    description: "A weather app using OpenWeather API.",
    image: PortfolioScreenshot,
    pdf: WeatherDashboardPDF,
    link: "https://github.com/VampMina528/Weather-Dashboard",
  },
  {
    title: "Employee-CMS",
    description: "A CLI tool for managing employees.",
    image: PortfolioScreenshot,
    pdf: EmployeeCMSPDF,
    link: "https://github.com/VampMina528/Employee-CMS",
  },
  {
    title: "React Portfolio",
    description: "My personal portfolio site.",
    image: PortfolioScreenshot,
    link: "https://github.com/VampMina528/React-Portfolio-Mina",
  },
  {
    title: "Vehicles",
    description: "Vehicle Builder.",
    image: PortfolioScreenshot,
    pdf: VehicleBuilderPDF,
    link: "https://github.com/VampMina528/Vehicles",
  },
  {
    title: "README Generator",
    description: "README Generator.",
    image: PortfolioScreenshot,
    pdf: READMEGeneratorPDF,
    link: "https://github.com/VampMina528/README-Generator",
  },
  {
    title: "Bird-Quiz",
    description: "A collaboration with teammates for bird lovers.",
    image: PortfolioScreenshot,
    pdf: BirdsPDF,
    link: "https://github.com/VampMina528/Bird-Quiz",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1 style={styles.heading}>My Projects</h1>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            pdf={project.pdf}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    marginTop: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};
