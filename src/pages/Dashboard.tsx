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

  // 👇 All Services list here
  const allServices: string[] = [
    "Hair Cut",
    "Hair Color",
    "Facial",
    "Manicure",
    "Pedicure",
    "Makeup",
    "Waxing",
    "Threading",
    "Spa",
    "Bridal Package",
  ];

  // Fetch bookings
  useEffect(() => {
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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

  // Handle Accept / Reject
  const handleStatusChange = (id: number, status: "accepted" | "rejected") => {
    fetch(
      `https://glamourheaven-backend.onrender.com/api/bookings/${id}/${status}/`,
      {
        method: "POST",
      }
    )
      .then(() => {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status } : b))
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 p-8 relative overflow-hidden">

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-yellow-700 text-center mb-12 drop-shadow-md">
        ✨ Glamour Heaven Dashboard ✨
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Bookings Table */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
            📋 Current Bookings
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-yellow-200 text-gray-800 font-semibold">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr
                    key={b.id}
                    className="border-b hover:bg-yellow-50 transition-all"
                  >
                    <td className="p-3 font-medium">{b.name}</td>
                    <td className="p-3">{b.phone}</td>
                    <td className="p-3">{b.date}</td>
                    <td className="p-3">{b.time}</td>
                    <td className="p-3">{b.service}</td>
                    <td className="p-3 text-center space-x-2">
                      {/* Accept */}
                      <button
                        className={`px-3 py-1.5 rounded-xl text-white shadow ${
                          b.status === "accepted"
                            ? "bg-green-600"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
                        onClick={() => handleStatusChange(b.id, "accepted")}
                      >
                        {b.status === "accepted" ? "✔ Accepted" : "Accept"}
                      </button>

                      {/* Reject */}
                      <button
                        className={`px-3 py-1.5 rounded-xl text-white shadow ${
                          b.status === "rejected"
                            ? "bg-red-600"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                        onClick={() => handleStatusChange(b.id, "rejected")}
                      >
                        {b.status === "rejected" ? "✘ Rejected" : "Reject"}
                      </button>

                      {/* Delete */}
                      <button
                        className="bg-gray-500 text-white px-3 py-1.5 rounded-xl shadow hover:bg-gray-600"
                        onClick={() => handleDelete(b.id)}
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {bookings.length === 0 && (
              <p className="text-center text-gray-500 py-6">
                No bookings available yet.
              </p>
            )}
          </div>
        </div>

        {/* Add Booking Form */}
        <div className="bg-white shadow-2xl rounded-3xl p-6 border border-yellow-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
            ➕ Add New Booking
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Customer Name"
              className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />

            {/* Dropdown for Services */}
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            >
              <option value="">-- Select a service --</option>
              {allServices.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-xl w-full font-semibold text-lg shadow-md hover:bg-yellow-600 transition-all"
            >
              ➕ Add Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
