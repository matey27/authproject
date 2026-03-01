import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://auth-project-2-pcfm.onrender.com/signup", {
        name,
        email,
        password
      });

      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert("User already exists");
    }
  };

  return (
  <div className="container">
    <h2>Create Account</h2>

    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Signup</button>
    </form>

    <div className="link-text">
      Already have an account?{" "}
      <span onClick={() => navigate("/login")}>
        Login
      </span>
    </div>
  </div>
);
}

export default Signup;