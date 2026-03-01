import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://auth-project-2-pcfm.onrender.com/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
  <div className="container">
    <h2>Welcome Back</h2>

    <form onSubmit={handleLogin}>
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

      <button type="submit">Login</button>
    </form>

    <div className="link-text">
      Don’t have an account?{" "}
      <span onClick={() => navigate("/")}>
        Signup
      </span>
    </div>
  </div>
);
}

export default Login;