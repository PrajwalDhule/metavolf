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

  return (
    <nav>
      <img src="/logo.png" />
      <ul>
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
    </nav>
  );
}

export default Navbar;
