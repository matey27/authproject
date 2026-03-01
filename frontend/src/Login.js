import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Use environment variable with your specific Render URL as a fallback
    const API_URL = process.env.REACT_APP_API_URL || "https://authproject-vldw.onrender.com";

    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.response?.data?.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
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
          disabled={isLoading}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="link-text">
        Don’t have an account?{" "}
        <span 
          onClick={() => navigate("/")} 
          style={{ cursor: "pointer", color: "#667eea", fontWeight: "bold" }}
        >
          Signup
        </span>
      </div>
    </div>
  );
}

export default Login;