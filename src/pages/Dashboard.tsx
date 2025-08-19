import React from "react";

const BookingsDashboard = () => {
  const bookings = [
    { id: 1, name: "John Doe", service: "Haircut", date: "2025-08-20", status: "Pending" },
    { id: 2, name: "Sarah Smith", service: "Facial", date: "2025-08-21", status: "Confirmed" },
    { id: 3, name: "Michael Brown", service: "Massage", date: "2025-08-22", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📋 Current Bookings</h1>

      <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-gray-800">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Service</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-yellow-50 transition`}
              >
                <td className="p-4 font-medium">{booking.id}</td>
                <td className="p-4">{booking.name}</td>
                <td className="p-4">{booking.service}</td>
                <td className="p-4">{booking.date}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 shadow-md">
                    Accept
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 shadow-md">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsDashboard;
