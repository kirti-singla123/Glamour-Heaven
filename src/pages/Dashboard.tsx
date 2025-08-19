import React from "react";
import { FaHome, FaUser, FaCog, FaBell, FaUserCircle } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

interface CardData {
  title: string;
  value: string;
  color: string;
}

const Dashboard: React.FC = () => {
  const cardData: CardData[] = [
    { title: "Users", value: "1200", color: "#0ea5e9" },
    { title: "Sales", value: "$3500", color: "#14b8a6" },
    { title: "Revenue", value: "$12,000", color: "#f97316" },
  ];

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4000 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 7000 },
  ];

  const usersTable = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div style={{ width: "220px", backgroundColor: "#1e293b", color: "white", padding: "20px" }}>
        <h2>My Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "20px 0", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}><FaHome /> Home</li>
          <li style={{ margin: "20px 0", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}><FaUser /> Users</li>
          <li style={{ margin: "20px 0", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}><FaCog /> Settings</li>
        </ul>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8fafc", overflowY: "auto" }}>
        {/* Navbar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "60px", backgroundColor: "#f1f5f9", padding: "0 20px", borderRadius: "10px" }}>
          <h3>Dashboard</h3>
          <div style={{ display: "flex", gap: "15px", fontSize: "1.2rem" }}>
            <FaBell />
            <FaUserCircle />
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
          {cardData.map((card, index) => (
            <div key={index} style={{
              flex: "1 1 150px",
              padding: "20px",
              borderRadius: "10px",
              color: "white",
              backgroundColor: card.color,
              textAlign: "center",
              minWidth: "150px",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h4>{card.title}</h4>
              <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div style={{ display: "flex", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 300px", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
            <h4>Monthly Sales</h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#0ea5e9" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ flex: "1 1 300px", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
            <h4>Users Table</h4>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>ID</th>
                  <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #ddd" }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {usersTable.map(user => (
                  <tr key={user.id}>
                    <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{user.id}</td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{user.name}</td>
                    <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
