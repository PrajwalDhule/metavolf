import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeServices() {
  useEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-services-body",
        start: "top 75%",
      },
    });
    tl1.to(".home-services-body .desc", {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-services-content",
        start: "top center",
      },
    });
    tl2
      .to(".home-services-content > .start-line-wrapper", {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 0.5,
      })
      .to(".home-services-content > h2", {
        opacity: 1,
        opacity: 1,
        duration: 0.5,
      })
      .to(".home-services-content .service", {
        x: 0,
        opacity: 1,
        duration: 0.5,
      });
  }, []);
  return (
    <div className="home-services-body">
      <div className="desc">
        <p>
          Hyper Sales builds Metaverses specific to our client and has worked on
          75+ projects. We carry out marketing campaigns in an extremely
          customer engaging way.
        </p>
        <div className="trust-label">
          <div>
            <p>100+ </p>
            <p>clients</p>
          </div>
          <img src="/trust_label.png" />
        </div>
      </div>
      <div className="home-services-content">
        <div className="start-line-wrapper">
          <div className="start-line"></div>
          <div className="circle"></div>
        </div>
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <div className="service-content">
              <h4>
                <p>01</p>Web based metaverses
              </h4>
              <p>
                Unlock the power of data-driven metaverse experiences with our
                web-based solutions. Optimize sales and engagement with our
                tracking capabilities.
              </p>
            </div>
            <a href="#">
              <p>View more</p>
            </a>
          </div>
          <div className="service">
            <div className="service-content">
              <h4>
                <p>02</p>Interactive 360 walkthroughs{" "}
              </h4>
              <p>
                Enhance customer awareness and brand awareness with our web
                based 360 walkthrough solutions. Explore your space like never
                before with our cutting-edge technology.
              </p>
            </div>
            <a href="#">
              <p>View more</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
