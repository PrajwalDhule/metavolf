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
        <div className="start-line"></div>
        <h2>
          <div>
            <div></div>Our
          </div>
          <div>Services</div>
        </h2>
        <div className="services">
          <div className="service">
            <div className="service-content-wrapper">
              <div className="service-content">
                <h4>Metaverse Development</h4>
                <p>
                  Give your customers a highly immersive and unforgettable
                  Metaverse experience
                </p>
                <div className="bottom-wrapper">
                  <p>01</p>
                  <button>View more</button>
                </div>
              </div>
              <div className="line"></div>
            </div>
            <div className="service-img-wrapper">
              {/* <img src="/"/> */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
