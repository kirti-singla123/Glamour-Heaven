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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fffdf5] to-[#fef9e7] p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#b8860b]">
        ✨ Glamour Heaven Dashboard ✨
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-2xl rounded-2xl">
          <table className="min-w-full border border-[#f0e5c0] rounded-2xl overflow-hidden">
            <thead className="bg-[#b8860b] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-lg font-semibold">Service</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Phone</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-lg font-semibold">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {bookings.map((booking, idx) => (
                <tr
                  key={booking.id}
                  className={`hover:bg-[#fffaf0] transition ${
                    idx % 2 === 0 ? "bg-[#fffcf5]" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">
                    {booking.service}
                  </td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">
                    {booking.name}
                  </td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">
                    {booking.phone}
                  </td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">
                    {booking.date}
                  </td>
                  <td className="px-6 py-4 border-b border-[#f0e5c0]">
                    {booking.time}
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
