import React, { useState, useEffect } from "react";

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: "pending" | "accepted" | "rejected";
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

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("bookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  // ✅ Save to localStorage whenever bookings change
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: Date.now(),
      ...form,
      status: "pending",
    };
    setBookings([...bookings, newBooking]);
    setForm({ name: "", phone: "", date: "", time: "", service: "" });
  };

  const handleStatusChange = (id: number, newStatus: Booking["status"]) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const handleDelete = (id: number) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Glamour Heaven Dashboard</h1>

      {/* Add Booking Form */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
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

      {/* Bookings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{booking.name}</h3>
              <p className="text-gray-600">{booking.phone}</p>
              <p className="text-gray-600">{booking.date} at {booking.time}</p>
              <p className="text-gray-600">Service: {booking.service}</p>
              <p className={`mt-2 font-bold ${
                booking.status === "pending"
                  ? "text-yellow-500"
                  : booking.status === "accepted"
                  ? "text-green-500"
                  : "text-red-500"
              }`}>
                {booking.status.toUpperCase()}
              </p>
            </div>

            {/* ✅ Buttons always aligned right */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => handleStatusChange(booking.id, "accepted")}
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
              >
                Accept
              </button>
              <button
                onClick={() => handleStatusChange(booking.id, "rejected")}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={() => handleDelete(booking.id)}
                className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
