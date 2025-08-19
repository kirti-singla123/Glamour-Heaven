import { useEffect, useState } from "react";

interface Booking {
  id: number;
  service: string;
  name: string;
  phone: string;
  date: string;
  time: string;
}

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetch("https://glamourheaven-backend.onrender.com/api/bookings/")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  const handleAction = (id: number, action: "accept" | "reject") => {
    alert(`Booking #${id} ${action === "accept" ? "accepted ✅" : "rejected ❌"}`);
    // later: you can call API to update status here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffdf7] via-[#fffaf0] to-[#fdf5e6] p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#b8860b] drop-shadow-lg">
        ✨ Glamour Heaven Dashboard ✨
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-2xl rounded-2xl">
          <table className="min-w-full border border-[#f0e5c0] rounded-2xl overflow-hidden">
            <thead className="bg-gradient-to-r from-[#b8860b] to-[#daa520] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-lg font-semibold">Service</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Phone</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Time</th>
                <th className="px-6 py-3 text-center text-lg font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, idx) => (
                <tr
                  key={booking.id}
                  className={`transition-all duration-300 ${
                    idx % 2 === 0 ? "bg-[#fffcf5]" : "bg-white"
                  } hover:bg-[#fff8dc]`}
                >
                  <td className="px-6 py-4 border-b border-[#f0e5c0] font-medium text-[#444]">
                    {booking.service}
                  </td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">{booking.name}</td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">{booking.phone}</td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">{booking.date}</td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">{booking.time}</td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0] text-center">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleAction(booking.id, "accept")}
                        className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition"
                      >
                        ✅ Accept
                      </button>
                      <button
                        onClick={() => handleAction(booking.id, "reject")}
                        className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition"
                      >
                        ❌ Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
