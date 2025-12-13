import React from "react";

const Education = () => {
  return (
    <section id="education" className="section education-container">
      <h2 className="education-title">Education</h2>


      {/* ===================== 3. NEW – B.Tech in CSE ===================== */}
      <div className="education-card">
        <img src="/anurag-logo.png" className="edu-logo" />

        <div className="edu-content">
          <h3>Anurag University - Bachelor of Technology in Computer Science and Engineering</h3>
          <p className="edu-duration">August 2020 – May 2024</p>

          <p>
            Completed coursework in algorithms, operating systems, cloud computing,
            machine learning, database systems, and computer networks.
          </p>

          <p className="edu-gpa"><b>GPA:</b> 9.46/10</p>
        </div>
      </div>

      {/* ===================== 4. NEW – Intermediate ===================== */}
      <div className="education-card">
        <img src="/narayana-logo.png" className="edu-logo" />

        <div className="edu-content">
          <h3>Narayana Junior College – Intermediate (MPC)</h3>
          <p className="edu-duration">2018 – 2020</p>

          <p>
            Completed coursework in Mathematics, Physics, and Chemistry with strong
            academic performance.
          </p>

          <p className="edu-gpa"><b>GPA:</b> 9.4/10</p>
        </div>
      </div>

    </section>
  );
};

export default Education;
