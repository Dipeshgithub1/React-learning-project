import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // Ensure the path is correct

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to create a new user
  const createUser = () => {
    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Signup Successful!");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter Your Email Here"
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter Your Password Here"
      />

      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
