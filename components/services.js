import Link from "next/link";

export default function HomeServices() {
  return (
    <div className="home-services-body">
      <div className="desc">
        <p>
          Metavolf builds Metaverses specific to our client and has worked on
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
              <h4>Web based metaverses</h4>
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
              <h4>Interactive 360 walkthroughs </h4>
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
