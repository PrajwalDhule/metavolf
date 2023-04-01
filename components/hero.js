import Link from "next/link";
import Navbar from "./nav";
import axios from 'axios';
export default function Hero() {
  var ClickHua = async(event) => {
    console.log("Hua");
    try {
      const response = await axios.post("/api/services", {
      email: "piushpaul.16@gmail.com",
      });
      console.log(response);
    } catch (error) {
        console.log(error);
    }

  }
  return (
    <div className="hero-body">
      {/* <div class="m-scroll">
        <div class="m-scroll__title">
          <div>
            <h1>
              <a href="https://dribbble.com/JulianoF">Likedin,</a>{" "}
              <a href="https://dribbble.com/JulianoF">Dribbble</a> &amp;{" "}
              <a href="https://dribbble.com/JulianoF">Instagram </a>&nbsp;
            </h1>
            <h1>
              <a href="https://dribbble.com/JulianoF">Likedin,</a>{" "}
              <a href="https://dribbble.com/JulianoF">Dribbble</a> &amp;{" "}
              <a href="https://dribbble.com/JulianoF">Instagram </a>&nbsp;
            </h1>
          </div>
        </div>
      </div> */}
      {/* <p className="bg-text">
        <div>THE FUTURE THE FUTURE THE FUTURE</div>
        <div>THE FUTURE THE FUTURE THE FUTURE</div>
      </p> */}
      <div className="m-scroll">
        <div className="m-scroll__title">
          <div>
            <h1>
              <p>THE FUTURE. THE FUTURE.</p>
            </h1>
            <h1>
              <p>THE FUTURE. THE FUTURE.</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="hero-content">
        <h1>
          <p>Innovate. </p>
          <p>Optimize. </p>
          <p>Scale. </p>
        </h1>
        <p className="desc">
          Innovate solutions to drive growth, cut costs and stay ahead of the
          competition.
        </p>
        <div className="btn-container" onClick={ClickHua}>
          <Link href="/">
            <button>Explore Services</button>
          </Link>
          <Link href="/login">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
