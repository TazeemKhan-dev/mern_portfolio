/* eslint-disable react-refresh/only-export-components */
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";
import { useSelector } from "react-redux";
const Skills = () => {
  const data = useSelector((state) => state.api.data);

  const experiences = data?.about?.experience || [];
  const skills = data?.about?.skills || [];

  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* Skills Section */}
        <div className="skills">
          <h3 className="sub-title">Skills</h3>
          <div className="skills-badges">
            {skills.map((skill) => (
              <span
                className="skill-badge"
                key={skill.name}
                style={{ backgroundColor: skill.color }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div className="experiences">
          <h3 className="sub-title">Experience</h3>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div className="experience-item" key={index}>
                <p className="experience-duration">{experience.duration}</p>
                <div className="experience-details">
                  <h4 className="experience-title">{experience.title}</h4>
                  <a
                    href={experience.companyUrl}
                    className="experience-company"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {experience.company}
                  </a>
                  <p className="experience-description">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
