import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔒 Protect route: Redirect if no token is found
    if (!token) {
      navigate("/login");
      return;
    }

    // Use environment variable with your specific Render URL as a fallback
    const API_URL = process.env.REACT_APP_API_URL || "https://authproject-vldw.onrender.com";

    axios.get(`${API_URL}/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setMessage(res.data.message);
      setTotalUsers(res.data.total_users);
    })
    .catch((error) => {
      console.error("Dashboard error:", error);
      alert("Session expired or Server Error");
      localStorage.removeItem("token");
      navigate("/login");
    });

  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-box">
      <h2>{message || "Loading..."}</h2>
      <p style={{ fontSize: "18px", marginTop: "15px" }}>
        Total Registered Users
      </p>
      <h1 style={{ color: "#667eea" }}>{totalUsers}</h1>

      <button onClick={logout} style={{ marginTop: "25px" }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;