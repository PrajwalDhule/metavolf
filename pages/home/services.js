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
            <h4>Metaverse Development</h4>
            <p>
              Give your customers a highly immersive and unforgettable Metaverse
              experience
            </p>
          </div>
          <div className="service">
            <h4>AR/VR </h4>
            <p>
              Create a campaign by starting a NFT collection and provide a
              unique customer experience
            </p>
          </div>
          <div className="service">
            <h4>Blockchain Development</h4>
            <p>
              From decentralized storages to creating your own blockchain, we've
              got it all covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
