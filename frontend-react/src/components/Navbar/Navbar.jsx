import { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { useSelector } from "react-redux";
const Navbar = () => {
  const nav = ["home", "about", "work", "skills", "contact", "resume"];
  const [toggle, setToggle] = useState(false);
  const data = useSelector((state) => state.api.data);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo_1} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {nav.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={item === "resume" ? `${data?.home?.resume}` : `#${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {nav.map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
