import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate for logout

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status?: string;
  price?: number;
  duration?: string;
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
  const [showForm, setShowForm] = useState(false);

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

  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // ✅ hook for logout

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // clear token
    navigate("/login"); // redirect to login
  };

  // Fetch bookings
  useEffect(() => {
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, [token]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      "https://glamourheaven-backend.onrender.com/api/bookings/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      const newBooking = await res.json();
      setBookings([...bookings, newBooking]);
      setForm({ name: "", phone: "", date: "", time: "", service: "" });
      setShowForm(false);
    }
  };

  const handleStatusChange = async (
    id: number,
    status: "accepted" | "rejected"
  ) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );

    try {
      const res = await fetch(
        `https://glamourheaven-backend.onrender.com/api/bookings/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!res.ok) {
        console.error("Failed to update status:", await res.text());
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status: b.status } : b))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(
        `https://glamourheaven-backend.onrender.com/api/bookings/${id}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (res.ok) {
        setBookings((prev) => prev.filter((b) => b.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Summary counts
  const pendingCount = bookings.filter((b) => b.status === "pending").length;
  const todayCount = bookings.filter(
    (b) => b.date === new Date().toISOString().split("T")[0]
  ).length;
  const customers = bookings.length;
  const revenue = bookings.reduce((sum, b) => sum + (b.price || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="text-3xl font-bold text-orange-600">
          ✨ Glamour Heaven Dashboard ✨
        </div>

        {/* ✅ Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <div className="text-gray-500">Pending Bookings</div>
          <div className="text-2xl font-bold text-orange-600">{pendingCount}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <div className="text-gray-500">Today's Appointments</div>
          <div className="text-2xl font-bold text-orange-600">{todayCount}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <div className="text-gray-500">Total Customers</div>
          <div className="text-2xl font-bold text-orange-600">{customers}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <div className="text-gray-500">Today's Revenue</div>
          <div className="text-2xl font-bold text-green-600">${revenue}</div>
        </div>
      </div>

      {/* Add Walk-in Button */}
      <div className="text-right mb-6">
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-3 rounded-xl shadow hover:opacity-90"
        >
          + Add Walk-in Service
        </button>
      </div>

      {/* Walk-in Form */}
      {showForm && (
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            ➕ Add New Booking
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Customer Name"
              className="border rounded-xl px-4 py-3"
              required
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-xl px-4 py-3"
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3 col-span-2"
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
              className="col-span-2 bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600"
            >
              Save Booking
            </button>
          </form>
        </div>
      )}

      {/* Recent Bookings */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white p-6 rounded-2xl shadow border border-gray-100"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">{b.name}</h3>

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
                <span className="bg-yellow-200 text-yellow-600 px-3 py-1 rounded-xl text-sm">
                  Pending
                </span>
              )}
            </div>

            <p className="text-gray-600">{b.service}</p>
            <p className="text-gray-500 text-sm">
              {b.date} at {b.time}
            </p>
            <p className="text-gray-500 text-sm">{b.phone}</p>

            <div className="flex justify-between items-center mt-4">
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

        {bookings.length === 0 && (
          <p className="text-gray-500 text-center col-span-3">
            No bookings available yet.
          </p>
        )}
      </div>
    </div>
  );
}
