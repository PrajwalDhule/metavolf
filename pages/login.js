import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var handleSubmit = async (event) => {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    // get encrypted password from the server and pass password as a parameter
    const encryptedPassword = await axios.post("/api/encrypt", {
      email: email,
      password: password,
    });
    console.log("Message :", encryptedPassword.data);
  };

  return (
    <div className="login-body body">
      <div className="login-page-container">
        <Link href="/">
          <img src="/logo_w_o_text.png" />
        </Link>
        <h1>Login to HyperSales</h1>
        <form onSubmit={handleSubmit}>
          <label for="email">Email address:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="guide">
          Need help?
          <Link href="/"> Guide</Link>
        </p>
        <div className="bottom-links">
          <Link href="/">Terms</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Contact Metavolf</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
