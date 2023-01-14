import Link from "next/link";
import Navbar from "../nav";

export default function HomeServices() {
  return (
    <div className="home-services-body">
      <div className="home-services-content">
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
        <img src="/globe.png"></img>
      </div>
    </div>
  );
}
