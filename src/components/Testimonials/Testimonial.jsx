import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";


const Testimonial = () => {

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Select the </span>
        <span>Parameters </span>
        <span>for your search...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
    </div>
  );
};

export default Testimonial;
