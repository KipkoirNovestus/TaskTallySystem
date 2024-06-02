import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      // Perform login action
      // Assuming login is successful, navigate to the dashboard
      navigate("/dashlink");
    } else {
      // If no account exists, show the signup button
      setShowSignup(true);
    }
  };

  const handleSignup = () => {
    // Redirect to the signup page or show the signup form
    alert("Redirecting to sign up page...");
  };

  return (
    <>
      <div className="logincont">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        {showSignup && <button onClick={handleSignup}>Sign Up</button>}
      </div>
    </>
  );
}

export default LoginRegister;
