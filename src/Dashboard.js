import React from "react";
import { FaHome, FaUser, FaCog, FaBell, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  const cardData = [
    { title: "Users", value: "1200", color: "#0ea5e9" },
    { title: "Sales", value: "$3500", color: "#14b8a6" },
    { title: "Revenue", value: "$12,000", color: "#f97316" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "200px",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px"
      }}>
        <h2>My Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "20px 0", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}><FaHome /> Home</li>
          <li style={{ margin: "20px 0", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}><FaUser /> Users</li>
          <li style={{ margin: "20px 0", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}><FaCog /> Settings</li>
        </ul>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8fafc" }}>
        
        {/* Navbar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px", backgroundColor: "#f1f5f9", padding: "0 20px" }}>
          <h3>Dashboard</h3>
          <div style={{ display: "flex", gap: "15px", fontSize: "1.2rem" }}>
            <FaBell />
            <FaUserCircle />
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {cardData.map((card, index) => (
            <div key={index} style={{
              flex: 1,
              padding: "20px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: card.color,
              textAlign: "center",
              minWidth: "150px"
            }}>
              <h4>{card.title}</h4>
              <p>{card.value}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
