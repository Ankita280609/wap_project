import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function LoginPage({ onLogin, onChangePage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      onLogin(email); // Notify App.jsx that user is logged in
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setError("");
      onLogin(result.user.email);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        {error && <div className="error-msg" style={{ color: "red" }}>{error}</div>}

        <form onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          style={{ marginTop: "10px", backgroundColor: "#E64833", color: "#fff" }}
        >
          Sign in with Google
        </button>

        <p>
          Don’t have an account?{" "}
          <span
            onClick={() => onChangePage("signup")}
            style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;