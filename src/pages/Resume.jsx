export default function Resume() {
    return (
      <div>
        <h2>Resume</h2>
        <p>
          {/* <a href="https://your-netlify-site.netlify.app/resume.pdf"  */}
             download 
             style={styles.link}>
            Download Resume
          </a>
        </p>
        <h3>Proficiencies</h3>
        <ul style={styles.list}>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>SQL & NoSQL</li>
          <li>REST APIs</li>
        </ul>
      </div>
    );
  }
  
  const styles = {
    list: { listStyleType: "none", color: "#003566",  padding: 0 },
    link: { textDecoration: "none", color: "#F2F5EA", fontSize: "18px" },
  };
  