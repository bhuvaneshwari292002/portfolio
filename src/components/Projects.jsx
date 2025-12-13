import React from "react";
//import "./Projects.css";

const projects = [
  {
    title: "Zealthy EMR & Patient Portal",
    image: "/images/emr.png",
    description: `
      Built as part of Zealthy's Full Stack Engineering Exercise. 
      A complete EMR + Patient Portal system with secure login, 
      appointment scheduling, prescription management, and AI-driven 
      medical information summarization. Includes separate admin and 
      patient interfaces with a modern UI.
    `,
    tech: ["React", "Node.js", "MongoDB", "REST API", "JWT Auth", "AI Integration"]
  },
  {
    title: "AI Website Builder",
    image: "/images/ai-website-builder.png",
    description: `
      A next-generation platform powered by Gemini Flash 2.0 allowing 
      users to generate entire websites using natural language input. 
      Converts ideas into code with smart content generation, 
      component synthesis, and AI-powered suggestions.
    `,
    tech: ["Next.js", "Gemini AI", "Node.js", "Tailwind CSS", "Vercel"]
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    description: `
      A modern personal portfolio with responsive design, dark/light mode,
      smooth animations, and project showcases. Built with clean UI and 
      production-ready reusable components.
    `,
    tech: ["React", "Node.js", "HTML", "CSS"]
  },
  {
    title: "Personal Expense Tracker",
    image: "/images/expense-tracker.png",
    description: `
      A full-stack expense tracker with ReactJS frontend and Node.js backend. 
      Uses MySQL (AWS RDS) for reliable storage, AWS EC2 for hosting, 
      AWS Lambda for serverless expense categorization, and S3 for secure 
      receipt storage.
    `,
    tech: ["ReactJS", "Node.js", "MySQL", "AWS EC2", "AWS Lambda", "AWS S3"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      {projects.map((proj, index) => (
        <div key={index} className="project-card">
          <img src={proj.image} alt={proj.title} className="project-image" />

          <div className="project-info">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-item">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
