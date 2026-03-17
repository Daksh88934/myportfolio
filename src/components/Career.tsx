import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Artificial Intelligence</h4>
                <h5>ABESIT Institute of Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Current Study Program. Passionate about solving real-world problems
              using AI, data structures, and continuous learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Smart India Hackathon 2025</h4>
                <h5>Internal Hackathon (Team: Techtatva)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Collaborated in a team to design a solution for a real-world problem.
              Contributed to idea development, feature planning, and implementation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Python & Generative AI</h5>
              </div>
              <h3>Recent</h3>
            </div>
            <p>
              Completed "Programming Fundamentals Using Python" by Springboard and
              "Generative AI for Beginners" by Simplilearn SkillUp, learning basics of LLMs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
