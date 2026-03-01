import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Dynamic API URL with your current Render backend as the fallback
    const API_URL = process.env.REACT_APP_API_URL || "https://authproject-vldw.onrender.com";

    try {
      await axios.post(`${API_URL}/signup`, {
        name,
        email,
        password
      });

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      // Show backend error message if it exists, otherwise use fallback
      alert(err.response?.data?.message || "User already exists or server error");
    } finally {
      setIsLoading(false);
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
          disabled={isLoading}
        />

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
          {isLoading ? "Creating Account..." : "Signup"}
        </button>
      </form>

      <div className="link-text">
        Already have an account?{" "}
        <span 
          onClick={() => navigate("/login")} 
          style={{ cursor: "pointer", color: "#667eea", fontWeight: "bold" }}
        >
          Login
        </span>
      </div>
    </div>
  );
}

export default Signup;