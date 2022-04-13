import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Select the parameters</span>
          <span>for your search</span>
          <spane>Available years: 2000-2015
            <br />
            Available tools: MRB, CTD, SUR
            <br />
            Available measurements: temp, salinity, pH, CO2, pressure, alkalinity, conductivity
            <br /> 
            Available types of queries: average, change
          </spane>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="start_year" className="user"  placeholder="Start Year"/>
          <input type="text" name="end_year" className="user" placeholder="End Year"/>
          <input type="text" name="longitude" className="user" placeholder="Longitude"/>
          <input type="text" name="latitude" className="user" placeholder="Latitude"/>
          <input type="text" name="tool" className="user" placeholder="Tool"/>
          <input type="text" name="measurement" className="user" placeholder="Measurement"/>
          <input type="text" name="type" className="user" placeholder="Type"/>
          <input type="submit" value="Submit" className="button"/>
          <span>{done && "Thank you"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
