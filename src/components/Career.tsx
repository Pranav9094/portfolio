import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI & DS)</h4>
                <h5>Parul University, Vadodara</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science Engineering
              with specialization in Artificial Intelligence & Data Science.
              Focused on Machine Learning, Big Data Analytics, and AI-driven application development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Data Analytics Specialization</h4>
                <h5>Coursera — Google</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed the Google Data Analytics Professional Certificate covering
              data cleaning, analysis, visualization, SQL, R programming, and
              Tableau — backed by hands-on real-world case studies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Syllabus → Success Engine</h4>
                <h5>Kanan Hackathon 2026 — Team THE ELITES</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built an AI-powered platform that transforms any syllabus into
              a 15-week personalized study roadmap with NOVA AI Professor,
              smart calendar, and weekly prep emails using React.js, Electron & Gemini AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
