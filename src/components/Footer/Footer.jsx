import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>nicholas.hobin@ufl.edu,  adrian.wright@ufl.edu, brianguida@ufl.edu,  humbertogarcia@ufl.edu</span>
      </div>
    </div>
  );
};

export default Footer;
