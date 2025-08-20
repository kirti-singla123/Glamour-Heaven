import React, { useEffect, useState } from "react";

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status?: "accepted" | "rejected" | null;
}

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });
  const [showForm, setShowForm] = useState(false);

  // Fetch Bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          "https://glamourheaven-backend.onrender.com/api/bookings/"
        );
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Handle Form Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add New Booking
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
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
        setBookings((prev) => [...prev, newBooking]);
        setForm({ name: "", phone: "", date: "", time: "", service: "" });
        setShowForm(false);
      }
    } catch (err) {
      console.error("Error adding booking:", err);
    }
  };

  // Update Booking Status (Persist in DB)
  const handleStatusChange = async (
    id: number,
    status: "accepted" | "rejected"
  ) => {
    try {
      const res = await fetch(
        `https://glamourheaven-backend.onrender.com/api/bookings/${id}/`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );

      if (res.ok) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status } : b))
        );
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  // Delete Booking
  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(
        `https://glamourheaven-backend.onrender.com/api/bookings/${id}/`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setBookings((prev) => prev.filter((b) => b.id !== id));
      }
    } catch (err) {
      console.error("Error deleting booking:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Glamour Heaven Dashboard
      </h1>

      {/* Walk-in Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {showForm ? "Close Walk-in Form" : "Add Walk-in Service"}
        </button>
      </div>

      {/* Add Booking Form */}
      {showForm && (
        <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add Booking
          </h2>
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
      )}

      {/* Bookings List */}
      {loading ? (
        <p className="text-center text-gray-600">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800">{b.name}</h3>
                <p className="text-gray-600">📞 {b.phone}</p>
                <p className="text-gray-600">📅 {b.date}</p>
                <p className="text-gray-600">⏰ {b.time}</p>
                <p className="text-gray-600">💇 {b.service}</p>
              </div>

              {/* Status + Actions */}
              <div className="flex justify-between items-center mt-4">
                {/* Status */}
                {b.status === "accepted" && (
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-xl text-sm">
                    Accepted
                  </span>
                )}
                {b.status === "rejected" && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-xl text-sm">
                    Rejected
                  </span>
                )}
                {!b.status && (
                  <span className="bg-yellow-300 text-yellow-700 px-3 py-1 rounded-xl text-sm">
                    Pending
                  </span>
                )}

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                    onClick={() => handleStatusChange(b.id, "accepted")}
                  >
                    Accept
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    onClick={() => handleStatusChange(b.id, "rejected")}
                  >
                    Reject
                  </button>
                  <button
                    className="bg-gray-400 text-white px-3 py-1 rounded-lg hover:bg-gray-500"
                    onClick={() => handleDelete(b.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
