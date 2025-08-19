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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-xl rounded-2xl p-6 border border-[#f0e5c0] hover:shadow-2xl transition"
            >
              <h2 className="text-xl font-semibold text-[#b8860b] mb-2">
                {booking.service}
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium text-[#b8860b]">👤 Name:</span>{" "}
                  {booking.name}
                </p>
                <p>
                  <span className="font-medium text-[#b8860b]">📞 Phone:</span>{" "}
                  {booking.phone}
                </p>
                <p>
                  <span className="font-medium text-[#b8860b]">📅 Date:</span>{" "}
                  {booking.date}
                </p>
                <p>
                  <span className="font-medium text-[#b8860b]">⏰ Time:</span>{" "}
                  {booking.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
