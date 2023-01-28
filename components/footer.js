import React from "react";

export default function Footer() {
  return (
    <div className="footer-body">
      <img src="/logo.png" />
      <div className="grid-child">
        <h6>Information</h6>
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
      <div className="grid-child">
        <h6>Contact us</h6>
        <ul>
          <li>
            <a href="#">+91 9876543210</a>
          </li>
          <li>
            <a href="#">email@email.com</a>
          </li>
        </ul>
      </div>
      <div className="grid-child">
        <p>©️ 2023 HyperSales All Rights Reserved</p>
      </div>
    </div>
  );
}
