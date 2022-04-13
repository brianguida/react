import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import world from "../../img/world.png";
import temp from "../../img/temp.png";
import pressure from "../../img/pressure.png";
import co2 from "../../img/co2.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Welcome to</span>
          <span>OceanData</span>
          <span>
            A tool to view various information about Earth's oceans
          </span>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={world} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={temp}
          alt=""
        />

        <motion.img
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          src={co2}
          alt=""
        />

         <motion.img
          initial={{ left: "9rem", top: "18rem"}}
          whileInView={{ left: "0rem" }}
          transition={transition}
          src={pressure}
          alt=""
        />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
