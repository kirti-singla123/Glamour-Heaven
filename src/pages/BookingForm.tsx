import { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";

interface FormData {
  name: string;
  date: string;
  time: string;
}

function BookingForm() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const [form, setForm] = useState<FormData>({ name: "", date: "", time: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", { ...form, service: serviceName });
    alert(`Booking confirmed for ${serviceName}!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-luxury p-8 border border-border/50">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Book {serviceName}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
            />
          </div>

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
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
            />
          </div>

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
              focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
            />
          </div>

          <button
            type="submit"
            className="w-full shadow-soft hover:shadow-glow transition-all duration-300 
            bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-xl"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
