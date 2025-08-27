import { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";

interface FormData {
  name: string;
  date: string;
  time: string;
  phone: string;
}

function BookingForm() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const [form, setForm] = useState<FormData>({ name: "", date: "", time: "", phone: "" });

  // ✅ Get token from localStorage
  const token = localStorage.getItem("token");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const bookingData = { ...form, service: serviceName };

    try {
      const response = await fetch("https://glamourheaven-backend.onrender.com/api/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Token ${token}` : "", // ✅ added token safely
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert(`Booking confirmed for ${serviceName}!`);
        setForm({ name: "", date: "", time: "", phone: "" }); // reset form
      } else {
        const errorData = await response.json();
        console.error("Error creating booking:", errorData);
        alert("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please check your connection.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-luxury p-8 border border-border/50">
        <h2 className="text-2xl font-bold text-center text-golden-accent mb-6">
          Book {serviceName}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-border/50 bg-background text-foreground 
              focus:outline-none focus:ring-2 focus:ring-golden-accent/50 focus:border-golden-accent transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-border/50 bg-background text-foreground 
              focus:outline-none focus:ring-2 focus:ring-golden-accent/50 focus:border-golden-accent transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-border/50 bg-background text-foreground 
              focus:outline-none focus:ring-2 focus:ring-golden-accent/50 focus:border-golden-accent transition"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Time
            </label>
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              required
              className="w-full px-4 py-2 rounded-xl border border-border/50 bg-background text-foreground 
              focus:outline-none focus:ring-2 focus:ring-golden-accent/50 focus:border-golden-accent transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full shadow-soft hover:shadow-glow transition-all duration-300 
            bg-golden-accent text-white font-semibold py-2 px-4 rounded-xl"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
