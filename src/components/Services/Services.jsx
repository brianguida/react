import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import buoy from "../../img/buoy.png";
import conductivity from "../../img/conductivity.png";
import water from "../../img/water.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Data Provided By</span>
        <span>National Centers for Environmental Information</span>
        <spane>
          Various tools used to gather ocean data
        </spane>
        <a href={"https://www.ncei.noaa.gov/products/world-ocean-database"}>
          <button className="button s-button">Visit Website</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={buoy}
            heading={"MRB"}
            detail={"Moored Buoy data"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={conductivity}
            heading={"CTD"}
            detail={"High resolution conductivity, temperature, and depth data"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={water}
            heading={"SUR"}
            detail={
              "Surface data"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
