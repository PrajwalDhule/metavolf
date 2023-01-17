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
        <div className="line"></div>
        <h2>Our Services</h2>
        <div className="services">
          <div className="line"></div>
          <span>Service 1</span>
          <span> Name</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <div className="line"></div>
          <span>Service 2</span>
          <span> Name</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing, sed do eiusmod.
          </p>
          <div className="line"></div>
          <span>Service 3</span>
          <span> Name</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodLorem.
          </p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
