import React, { useEffect, useState } from "react";

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status?: string;
}

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  // Fetch bookings
  useEffect(() => {
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add booking
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      "https://glamourheaven-backend.onrender.com/api/bookings/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    if (res.ok) {
      const newBooking = await res.json();
      setBookings([...bookings, newBooking]);
      setForm({ name: "", phone: "", date: "", time: "", service: "" });
    }
  };

  // Handle Accept/Reject
  const handleBookingStatus = (id: number, action: "accept" | "reject") => {
    fetch(`https://glamourheaven-backend.onrender.com/api/bookings/${id}/${action}/`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        setBookings((prev) =>
          prev.map((b) =>
            b.id === id ? { ...b, status: action === "accept" ? "accepted" : "rejected" } : b
          )
        );
      })
      .catch((err) => console.error(err));
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    fetch(`https://glamourheaven-backend.onrender.com/api/bookings/${id}/`, {
      method: "DELETE",
    })
      .then(() => {
        setBookings((prev) => prev.filter((b) => b.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 relative overflow-hidden">
      {/* Title */}
      <h1 className="relative text-4xl font-bold text-yellow-700 text-center mb-12">
        Glamour Heaven Dashboard
      </h1>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bookings Table */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bookings</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-100 text-gray-700">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-b hover:bg-yellow-50 transition-colors">
                  <td className="p-3">{b.name}</td>
                  <td className="p-3">{b.phone}</td>
                  <td className="p-3">{b.date}</td>
                  <td className="p-3">{b.time}</td>
                  <td className="p-3">{b.service}</td>
                  <td className="p-3">{b.status || "pending"}</td>
                  <td className="p-3 text-center space-x-2">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                      onClick={() => handleBookingStatus(b.id, "accept")}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                      onClick={() => handleBookingStatus(b.id, "reject")}
                    >
                      Reject
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
                      onClick={() => handleDelete(b.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Booking Form */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Booking</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Customer Name"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <input
              type="text"
              name="service"
              value={form.service}
              onChange={handleChange}
              placeholder="Service"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full hover:bg-yellow-600"
            >
              Add Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
