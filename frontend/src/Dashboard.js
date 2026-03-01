import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔒 Protect route
    if (!token) {
      navigate("/login");
      return;
    }

    axios.get("https://auth-project-2-pcfm.onrender.com/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setMessage(res.data.message);
      setTotalUsers(res.data.total_users);
    })
    .catch(() => {
      alert("Session expired");
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
    <h2>{message}</h2>
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