/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";
import { useSelector } from "react-redux";
const Skills = () => {
  const data = useSelector((state) => state.api.data);

  const [experiences, setExperiences] = useState(data?.about?.experience || []);
  const [skills, setSkills] = useState(data?.about?.skills || []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.color, padding: "2px" }}
              >
                <p
                  style={{ color: "white", fontWeight: "bold", margin: "10px" }}
                >
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.duration}
            >
              <div className="app__skills-exp-year"></div>
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={experience.title}
                  key={experience.title}
                >
                  <p className="app__skills-exp-duration">
                    {experience.duration}
                  </p>
                  {/* Apply the class here */}
                  <h4 className="bold-text">{experience.title}</h4>
                  {/* <a href={experience.company_url}>{experience.company}</a> */}
                  <p className="p-text .tag-cmp ">
                    <a href={experience.company_url}>{experience.company}</a>
                  </p>
                  <p
                    className="p-text"
                    style={{ color: "black", marginTop: 5 }}
                  >
                    {experience.description}
                  </p>
                </motion.div>
                <Tooltip
                  id={experience.title}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  {experience.desc}
                </Tooltip>
              </>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
