import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const [strokeColor, setStrokeColor] = useState("white");
  const [lineWidth, setLineWidth] = useState("27.5vw");

  useEffect(() => {
    if (window.matchMedia("(max-width: 1080px)").matches) {
      console.log("matched");
      setLineWidth("12.5vw");
    } else {
      console.log("not matched");
      setLineWidth("27.5vw");
    }

    gsap.to(".why-us-body .start-line:nth-child(2)", {
      width: `${lineWidth}`,
      duration: 0.25,
    });
  }, []);

  useEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-us-body",
        start: "top center",
      },
    });
    tl1
      .to(".why-us-body .start-line:nth-child(1)", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.25,
      })
      .to(".why-us-body .start-line:nth-child(2)", {
        // width: `${lineWidth}`,
        clipPath: "none",
        duration: 0.25,
      })
      .add(function () {
        let line = document.getElementById("lineTwo");
        line.style.setProperty("--psuedoOpacity", 1);
      })
      .to(".why-us-body h2", {
        opacity: 1,
        duration: 0.25,
      })
      .to(".why-us-body .why-us-content > p", {
        opacity: 1,
        duration: 0.5,
      });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".why-us-body > .start-line-wrapper",
        start: "top 50%",
      },
    });
    tl2
      .to(".why-us-body > .start-line-wrapper", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.5,
      })
      .to(".why-us-body .contact-text", {
        opacity: 1,
        duration: 0.25,
      })
      .to(".why-us-body button", {
        opacity: 1,
        duration: 0.25,
      });
  }, []);

  return (
    <div className="why-us-body">
      <div className="heading">
        <div className="start-line-wrapper">
          <div className="start-line"></div>
          <div className="start-line" id="lineTwo"></div>
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
      <h2 className="contact-text">
        <span>Take a step forward, try </span>
        <span>Hyper Sales</span>
      </h2>
      <button
        onMouseEnter={() => setStrokeColor("#000632")}
        onMouseLeave={() => setStrokeColor("white")}
      >
        <a>
          <p>Contact Sales</p>
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
