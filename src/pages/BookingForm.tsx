import { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";

interface FormData {
  name: string;
  phone: string;
  date: string;
  time: string;
}

function BookingForm() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    console.log("Booking submitted:", { ...form, service: serviceName });
    alert(
      `Booking confirmed for ${serviceName}!\n\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nTime: ${form.time}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-gradient-to-tr from-gray-50 to-gray-100 rounded-2xl shadow-soft p-8 border border-gray-300">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book {serviceName}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter 10-digit phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full shadow-soft hover:shadow-glow bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
