import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [bookings, setBookings] = useState([
    { id: 1, name: "John Doe", service: "Haircut", status: "Pending" },
    { id: 2, name: "Jane Smith", service: "Facial", status: "Pending" },
  ]);

  const [newBooking, setNewBooking] = useState({ name: "", service: "" });

  const handleAction = (id, action) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: action } : b
      )
    );
  };

  const handleAddBooking = (e) => {
    e.preventDefault();
    if (!newBooking.name || !newBooking.service) return;
    setBookings((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newBooking.name,
        service: newBooking.service,
        status: "Pending",
      },
    ]);
    setNewBooking({ name: "", service: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Booking Dashboard</h1>

      {/* Bookings Table */}
      <Card className="mb-8 shadow-xl rounded-2xl border border-yellow-200">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Current Bookings</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-yellow-100 text-left">
                <th className="p-2">Customer</th>
                <th className="p-2">Service</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-b hover:bg-yellow-50 transition">
                  <td className="p-2">{b.name}</td>
                  <td className="p-2">{b.service}</td>
                  <td className="p-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        b.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : b.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      onClick={() => handleAction(b.id, "Accepted")}
                    >
                      Accept
                    </Button>
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => handleAction(b.id, "Rejected")}
                    >
                      Reject
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Add Booking Form */}
      <Card className="shadow-xl rounded-2xl border border-yellow-200">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Booking</h2>
          <form onSubmit={handleAddBooking} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Customer Name"
              value={newBooking.name}
              onChange={(e) =>
                setNewBooking({ ...newBooking, name: e.target.value })
              }
              className="p-2 border rounded-xl focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Service"
              value={newBooking.service}
              onChange={(e) =>
                setNewBooking({ ...newBooking, service: e.target.value })
              }
              className="p-2 border rounded-xl focus:ring-2 focus:ring-yellow-400"
            />
            <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl">
              Add Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
