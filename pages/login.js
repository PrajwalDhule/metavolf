import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
  }

  return (
    <div className="login-body body">
      <div className="login-page-container">
        <form onSubmit={handleSubmit}>
          <label for="email">Email address:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setUsername(event.target.value)}
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
      </div>
    </div>
  );
}

export default Login;
