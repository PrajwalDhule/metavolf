import { Inter } from "@next/font/google";
import Link from "next/link";
import Navbar from "./nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="outer-body">
      <Navbar />
      <p className="bg-text">THE FUTURE</p>
      <div className="home-body body">
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
          <button>Explore Services</button>
          <button>Client Login</button>
        </div>
      </div>
    </div>
  );
}
