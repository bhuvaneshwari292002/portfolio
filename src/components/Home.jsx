import React from "react";
import profilePic from "../assets/profile.jpg";

// Import all icons
import python from "../assets/tech/python.png";
import java from "../assets/tech/java.png";
import cpp from "../assets/tech/cpp.png";
import js from "../assets/tech/js.png";
import ts from "../assets/tech/ts.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactLogo from "../assets/tech/react.png";
import angular from "../assets/tech/angular.png";
import nodejs from "../assets/tech/node.png";
import express from "../assets/tech/express.png";
import django from "../assets/tech/django.png";
import spring from "../assets/tech/spring.png";
import mysql from "../assets/tech/mysql.png";
import postgres from "../assets/tech/postgres.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";
import gitlab from "../assets/tech/gitlab.png";
import docker from "../assets/tech/docker.png";
import kubernetes from "../assets/tech/kubernetes.png";
import linux from "../assets/tech/linux.png";
import azure from "../assets/tech/azure.png";
import aws from "../assets/tech/aws.png";
const Home = () => {
  const techStack = [
    { name: "Python", icon: python },
    { name: "Java", icon: java },
    { name: "C++", icon: cpp },
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: ts },
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "React", icon: reactLogo },
    { name: "Angular", icon: angular },
    { name: "NodeJS", icon: nodejs },
    { name: "ExpressJS", icon: express },
    { name: "Django", icon: django },
    { name: "Spring", icon: spring },
    { name: "MySQL", icon: mysql },
    { name: "PostgreSQL", icon: postgres },
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "GitLab", icon: gitlab },
    { name: "Docker", icon: docker },
    { name: "Kubernetes", icon: kubernetes },
    { name: "Linux", icon: linux },
    { name: "Azure", icon: azure },
    { name: "Aws", icon: aws },
  ];

  return (
    <section id="home" className="section home-section">
      <div className="home-container">

        {/* LEFT SIDE CONTENT */}
        <div className="home-text">
          <h1 className="home-title">Full Stack Software Engineer</h1>

          <p className="home-description">
            Hi, I'm Bhuvaneshwari. A passionate Full Stack Software Engineer with
            expertise in frontend, backend, and AI technologies.
          </p>

          <div className="home-links">
            <a href="https://github.com" target="_blank">GitHub</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="/resume.pdf" target="_blank">Resume</a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="home-image">
          <img src={profilePic} alt="Profile" className="profile-img" />
        </div>
      </div>

      {/* ------------------------ TECH STACK SECTION ------------------------ */}
      <div className="techstack-section">
        <h2 className="techstack-title">Tech Stack</h2>

        <div className="techstack-icons">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
            <img src={tech.icon} alt={tech.name} />
            <span className="tooltip">{tech.name}</span>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
