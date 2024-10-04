import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useSelector } from "react-redux";

const About = () => {
  const data = useSelector((state) => state.api.data);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="head-text-des">{data?.about.bio}</div>

      {/* <div className="app__profiles">
        {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            {about.title}
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            {data?.home.des}
          </p>
        </motion.div>
        ))} 
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
