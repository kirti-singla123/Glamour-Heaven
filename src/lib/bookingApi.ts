export interface BookingPayload {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

// Same booking endpoint used by BookingForm.tsx — shared so every booking
// entry point (form or chatbot) goes through identical request logic.
export async function createBooking(payload: BookingPayload): Promise<Response> {
  const token = localStorage.getItem("token");

  return fetch("https://glamourheaven-backend.onrender.com/api/bookings/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Token ${token}` : "",
    },
    body: JSON.stringify(payload),
  });
}
