import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { setPersistence, browserLocalPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/clientApp";
// import { auth } from "firebase-admin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // var handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("email:", email);
  //   console.log("password:", password);
  //   setPersistence(auth,browserLocalPersistence).then(
  //     ()=>{
  //       return signInWithEmailAndPassword(auth,email,password).then(
  //         (credential)=>{
  //           // console.log(credential);
  //           // console.log(); 
  //           console.log(auth.currentUser.uid);
  //           router.push("/dashboard");
  //         }
  //       ).catch((error)=>{
  //         // TODO: handle error 
  //         console.log(error);
  //       });
  //     }
  //   ).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try { 
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user.uid);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-body body">
      <div className="login-page-container">
        <Link href="/">
          <img src="/logo.png" />
        </Link>
        <h1>Login to your account</h1>
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
          <Link href="/">Contact HyperSales</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
