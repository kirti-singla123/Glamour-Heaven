import { useEffect, useState } from "react";

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
}

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const todayBookings = bookings.filter((b) => b.date === today);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-600">Total Bookings</h2>
          <p className="text-2xl font-bold text-indigo-600">{bookings.length}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-600">Today’s Bookings</h2>
          <p className="text-2xl font-bold text-green-600">{todayBookings.length}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-600">Upcoming</h2>
          <p className="text-2xl font-bold text-purple-600">
            {bookings.filter((b) => b.date > today).length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">📋 Recent Bookings</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr
                key={b.id}
                className="hover:bg-gray-50 transition border-b last:border-none"
              >
                <td className="p-3">{b.id}</td>
                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.phone}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3">{b.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
