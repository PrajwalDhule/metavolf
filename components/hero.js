import Link from "next/link";
import Navbar from "./nav";

export default function Hero() {
  return (
    <div className="hero-body">
      <p className="bg-text">THE FUTURE</p>
      <div className="hero-content">
        <h1>
          <p>DEVELOP. </p>
          <p>PREVIEW. </p>
          <p>SHIP. </p>
        </h1>
        <p className="desc">
          From Metaverse, Ar/vr to Blockchain and Nfts needs, We've Got It All
          Covered, at one place
        </p>
        <div className="btn-container">
          <Link href="/">
            <button>Explore Services</button>
          </Link>
          <Link href="/login">
            <button>Client Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
