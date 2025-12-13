import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section experience-container">
      <h2 className="experience-title">Experience</h2>

      {/* --------- EXPERIENCE CARD 1 --------- */}
      <div className="experience-card">
        <img src="/ctrls-logo.png" className="exp-logo" />

        <div className="exp-content">
          <h3>Software Engineer | CtrlS Datacenter, Hyderabad</h3>
          <p className="exp-duration">July 2024 – Present</p>

          <ul className="exp-list">
            <li>
              Developed IOC Blocking Webpage to prevent firewall overload by externally storing Indicators of Compromise and exposing APIs used by KFIN, EMCURE, BFIL.
            </li>
            <li>
              Designed Zabbix Alert Automation System using OID & Event ID to auto-create tickets in MyShift.
            </li>
            <li>
              Automated ticket creation, updates, and closure using MyShift APIs integrated with Zabbix & email alerts.
            </li>
            <li>
              Scheduled automated updates every 20 mins using cron ensuring SLA compliance.
            </li>
            <li>
              Containerized full-stack apps using Docker and deployed on Azure Kubernetes Service (AKS) with ACR.
            </li>
            <li>
              Configured Azure Application Gateway, CDN, Monitor & Log Analytics improving uptime by 40%.
            </li>
            <li>
              Built API for retrieving Hyper-V asset data and pushing to client websites for visibility.
            </li>
          </ul>
        </div>
      </div>

      {/* --------- EXPERIENCE CARD 2 --------- */}
      <div className="experience-card">
        <img src="/ctrls-logo.png" className="exp-logo" />

        <div className="exp-content">
          <h3>Software Engineer Intern | CtrlS Datacenter, Hyderabad</h3>
          <p className="exp-duration">Feb 2024 – May 2024</p>

          <ul className="exp-list">
            <li>
              Configured CI/CD pipelines with GitHub Actions automating monthly Health Check Reports for 250+ customers.
            </li>
            <li>
              Implemented JWT authentication & RBAC using Passport.js and wrote full test coverage with Jest, Cypress, Postman.
            </li>
            <li>
              Developed and maintained Playwright & Selenium test suites improving UI stability.
            </li>
            <li>
              Created Grafana dashboards for monthly vulnerability analysis for internal security audits.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
