import Link from "next/link";
import Testimonial from "./testimonial";

export default function WhyUs() {
  return (
    <div className="why-us-body">
      <div className="heading">
        <div className="start-line-wrapper">
          <div className="start-line"></div>
          <div className="start-line"></div>
        </div>
        <h2>Why HyperSales?</h2>
      </div>
      <div className="why-us-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>brands</p>
      </div>
      <Testimonial />
      <div className="start-line-wrapper">
        <div className="start-line"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}
