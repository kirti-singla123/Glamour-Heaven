import React, { useEffect, useState } from "react";

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  price?: string;
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
    price: "",
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
      setForm({ name: "", phone: "", date: "", time: "", service: "", price: "" });
    }
  };

  // Handle Accept/Reject
  const handleBookingStatus = (id: number, action: "accept" | "reject") => {
    fetch(`https://glamourheaven-backend.onrender.com/api/bookings/${id}/${action}/`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`WhatsApp message sent! SID: ${data.sid}`);
        // Update local state to reflect new status
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status: action } : b))
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-40 right-40 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-25"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-yellow-300/40 via-pink-300/30 to-yellow-200/40 transform -skew-y-6"></div>
      </div>

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
                <th className="p-3 text-left">Price</th>
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
                  <td className="p-3">{b.price}</td>
                  <td className="p-3">{b.status || "pending"}</td>
                  <td className="p-3 text-center">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-green-600"
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
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
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
