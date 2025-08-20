import React, { useState, useEffect } from "react";

// Sample data
interface Booking {
  id: number;
  name: string;
  age: number;
  time: string;
  service: string;
  phone: string;
  status: "Pending" | "Accepted" | "Rejected";
}

const Dashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    } else {
      // Default data if nothing in storage
      const initialBookings: Booking[] = [
        {
          id: 1,
          name: "John Doe",
          age: 25,
          time: "10:00 AM",
          service: "Haircut",
          phone: "9876543210",
          status: "Pending",
        },
        {
          id: 2,
          name: "Jane Smith",
          age: 30,
          time: "11:30 AM",
          service: "Facial",
          phone: "9123456780",
          status: "Pending",
        },
      ];
      setBookings(initialBookings);
      localStorage.setItem("bookings", JSON.stringify(initialBookings));
    }
  }, []);

  // Save changes to localStorage
  const updateBookings = (updated: Booking[]) => {
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const handleAction = (id: number, action: "Accepted" | "Rejected") => {
    const updated = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: action } : booking
    );
    updateBookings(updated);
  };

  const handleDelete = (id: number) => {
    const updated = bookings.filter((booking) => booking.id !== id);
    updateBookings(updated);
  };

  return (
    <div className="min-h-screen bg-pink-100 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        Glamour Heaven Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-pink-700">
                {booking.name}
              </h2>
              <p className="text-gray-600">Age: {booking.age}</p>
              <p className="text-gray-600">Time: {booking.time}</p>
              <p className="text-gray-600">Service: {booking.service}</p>
              <p className="text-gray-600">Phone: {booking.phone}</p>
              <p
                className={`mt-2 font-bold ${
                  booking.status === "Pending"
                    ? "text-yellow-500"
                    : booking.status === "Accepted"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {booking.status}
              </p>
            </div>
            {/* Buttons aligned to right */}
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => handleAction(booking.id, "Accepted")}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
              >
                Accept
              </button>
              <button
                onClick={() => handleAction(booking.id, "Rejected")}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                Reject
              </button>
              <button
                onClick={() => handleDelete(booking.id)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
