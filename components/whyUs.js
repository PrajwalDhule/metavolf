import React, { useState } from "react";
import Link from "next/link";
import Testimonial from "./testimonial";

export default function WhyUs() {
  const [strokeColor, setStrokeColor] = useState("white");
  return (
    <div className="why-us-body">
      <div className="heading">
        <div className="start-line-wrapper">
          <div className="start-line"></div>
          <div className="start-line"></div>
        </div>
        <h2>Why HyperSales?</h2>
      </div>
      <div className="why-us-content">
        <p>
          Choose Hyper Sales for the powerful combination of innovation and
          cost-effectiveness. Empower your business with data-driven solutions
          that drive sales and growth.
        </p>
        {/* <p>brands</p> */}
      </div>
      {/* <Testimonial /> */}
      <div className="start-line-wrapper">
        <div className="start-line"></div>
        <div className="circle"></div>
      </div>
      <div className="contact-text">
        <span>Take a step forward, try </span>
        <span>Hyper Sales</span>
      </div>
      <button
        onMouseEnter={() => setStrokeColor("#000632")}
        onMouseLeave={() => setStrokeColor("white")}
      >
        <a>
          Contact Sales
          <svg
            width="44"
            height="40"
            viewBox="0 0 44 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.22 1H43M43 1L43 23.8M43 1L1 39"
              stroke={strokeColor}
              stroke-width="2"
            />
          </svg>
        </a>
      </button>
    </div>
  );
}
