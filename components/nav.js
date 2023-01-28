import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
  }
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link href="/">
        <img src="/logo.png" />
      </Link>

      <ul className="desktop-menu">
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">About us</Link>
        </li>
        <li>
          <Link href="/">Contact us</Link>
        </li>
        <li>
          <Link href="/login">Client login</Link>
        </li>
      </ul>
      <div className="hamburger-menu">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/">Contact us</Link>
          </li>
          <li>
            <Link href="/login">Client login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
