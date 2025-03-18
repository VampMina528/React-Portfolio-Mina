import React, { useEffect, useState } from 'react';
import ProjectListings from './ProjectListings';

const ProjectListings = () => {
    const [projects, setProjects] = useState([]);
  
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('your-api-endpoint');
          const data = await response.json();
          setProjects(data);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };
  
  
  fetchProjects();
  
    }, []);
  
  
    return (
      <div>
        <h2>My Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.name} - {project.description}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  
  export default ProjectListings;