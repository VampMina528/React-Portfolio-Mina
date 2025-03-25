import React from 'react';
import resumeFile from '../Resume.pdf'; 

function Resume() {
  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h2>Resume</h2>

    
      <p>
        <a href={resumeFile} target="_blank" rel="noopener noreferrer">
          Please Review my Resume Here
        </a>
      </p>

     
      <p>
        <a href={resumeFile} download>
          Download My Resume Here
        </a>
      </p>

      <h3>Proficiencies</h3>
   
      <li>HTML</li>
      <li>CSS</li>
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>Object-Oriented Programming</li>
      <li>React</li>
      <li>Node</li>
      <li>Git/GitHub</li>
      <li>PostgreSQL</li>
     
    </section>
  );
}

export default Resume;
