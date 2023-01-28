import Link from "next/link";
import Navbar from "./nav";
import Hero from "./hero";
import HomeServices from "./services";
import WhyUs from "./whyUs";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="home-body">
      <Navbar />
      <Hero />
      <HomeServices />
      <WhyUs />
      <Footer />
    </div>
  );
}
