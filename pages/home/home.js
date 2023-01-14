import Link from "next/link";
import Navbar from "../nav";
import Hero from "./hero";
import HomeServices from "./services";

export default function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <Hero />
      <HomeServices />
    </div>
  );
}
