import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function SignupPage({ onChangePage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError("");
      // Optionally redirect or change page
      onChangePage && onChangePage("home"); // or dashboard etc.
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setError("");
      onChangePage && onChangePage("home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Sign Up</h2>
        {error && <div className="error-msg" style={{ color: "red" }}>{error}</div>}

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          style={{ marginTop: "10px", backgroundColor: "#E64833", color: "#fff" }}
        >
          Sign up with Google
        </button>

        <p>
          Already have an account?{" "}
          <span
            onClick={() => onChangePage?.("login")}
            style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;