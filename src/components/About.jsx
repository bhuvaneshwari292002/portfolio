import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-box">
      <h2>About Me</h2>

      <div className="about-content">
        <img src="/laptop.jpg" className="about-img" alt="About" />

        <p>
          Hi, I'm <strong>Bhuvaneshwari</strong>, a Full Stack Software Engineer 
          with 2+ years of experience building secure, scalable applications using 
          Node.js, Express, React.js, and Next.js. I specialize in designing 
          RESTful and GraphQL APIs, microservices, and event-driven architectures 
          using Kafka.
          <br /><br />
          I am proficient in PostgreSQL, MySQL, and MongoDB, and experienced in 
          deploying containerized services on AWS and Azure using Docker, 
          Kubernetes, and CI/CD pipelines. My work focuses heavily on software 
          quality, automated testing, and scalable system design for reliable, 
          production-grade solutions.
          I enjoy building robust backend systems, real-time applications, 
          and automation scripts that improve performance and reduce operational 
          overhead. With strong Agile collaboration and problem-solving skills, 
          I consistently deliver high-impact features aligned with user and 
          business needs.
          I’m actively seeking opportunities in <strong>Full Stack, Backend, 
          Frontend, or Cloud Engineering</strong> — open to On-site, Hybrid, 
          or Remote roles.
        </p>
      </div>
      </div>
    </section>
  );
};

export default About;
