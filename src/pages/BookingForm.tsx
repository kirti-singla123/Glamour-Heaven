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
    <div>
      <h2>Book {serviceName}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
