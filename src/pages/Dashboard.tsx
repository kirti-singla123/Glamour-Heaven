import React, { useEffect, useState } from "react";

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

const Dashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Replace with your backend API URL
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      {/* Sidebar */}
      <div style={{ width: "220px", backgroundColor: "#1e293b", color: "white", padding: "20px" }}>
        <h2>Owner Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "20px 0", cursor: "pointer" }}>📋 Bookings</li>
          <li style={{ margin: "20px 0", cursor: "pointer" }}>🧾 Reports</li>
          <li style={{ margin: "20px 0", cursor: "pointer" }}>⚙️ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", backgroundColor: "#f8fafc" }}>
        <h2 style={{ marginBottom: "20px" }}>All Bookings</h2>
        <p>Total Bookings: {bookings.length}</p>

        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#0ea5e9", color: "white" }}>
              <th style={{ padding: "10px" }}>ID</th>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Phone</th>
              <th style={{ padding: "10px" }}>Date</th>
              <th style={{ padding: "10px" }}>Time</th>
              <th style={{ padding: "10px" }}>Service</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "8px" }}>{b.id}</td>
                <td style={{ padding: "8px" }}>{b.name}</td>
                <td style={{ padding: "8px" }}>{b.phone}</td>
                <td style={{ padding: "8px" }}>{b.date}</td>
                <td style={{ padding: "8px" }}>{b.time}</td>
                <td style={{ padding: "8px" }}>{b.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
