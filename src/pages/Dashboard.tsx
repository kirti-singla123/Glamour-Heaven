import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    name: "",
    service: "",
    date: "",
  });

  useEffect(() => {
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  const handleStatusChange = (id, status) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  const handleAddBooking = (e) => {
    e.preventDefault();
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings([...bookings, data]);
        setNewBooking({ name: "", service: "", date: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-yellow-100 p-8">
      {/* Decorative Circles */}
      <div className="relative mb-10">
        <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-40 blur-2xl animate-pulse"></div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        <h1 className="relative text-center text-4xl font-bold text-yellow-800">
          Glamour Heaven Dashboard
        </h1>
      </div>

      {/* Booking Table */}
      <div className="overflow-x-auto shadow-2xl rounded-2xl border border-amber-200 bg-white mb-12">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-t-2xl">
          Current Bookings
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-amber-100 text-yellow-900">
              <th className="p-3">Name</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, idx) => (
              <tr
                key={b.id}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-amber-50"
                } hover:bg-yellow-100 transition`}
              >
                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.service}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3 font-medium">
                  {b.status ? b.status : "Pending"}
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleStatusChange(b.id, "Accepted")}
                    className="px-3 py-1 rounded-full bg-green-500 text-white hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleStatusChange(b.id, "Rejected")}
                    className="px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Booking Table */}
      <div className="overflow-x-auto shadow-2xl rounded-2xl border border-pink-200 bg-white">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-3 rounded-t-2xl">
          Add New Booking
        </h2>
        <form
          onSubmit={handleAddBooking}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6"
        >
          <input
            type="text"
            placeholder="Name"
            value={newBooking.name}
            onChange={(e) =>
              setNewBooking({ ...newBooking, name: e.target.value })
            }
            className="border rounded-lg p-3"
            required
          />
          <input
            type="text"
            placeholder="Service"
            value={newBooking.service}
            onChange={(e) =>
              setNewBooking({ ...newBooking, service: e.target.value })
            }
            className="border rounded-lg p-3"
            required
          />
          <input
            type="date"
            value={newBooking.date}
            onChange={(e) =>
              setNewBooking({ ...newBooking, date: e.target.value })
            }
            className="border rounded-lg p-3"
            required
          />
          <button
            type="submit"
            className="md:col-span-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg py-2 font-semibold hover:opacity-90"
          >
            Add Booking
          </button>
        </form>
      </div>
    </div>
  );
}
