import { useLocation, Navigate } from "react-router-dom";

interface ConfirmationState {
  name: string;
  service: string;
  date: string;
  time: string;
}

function BookingConfirmation() {
  const location = useLocation();
  const state = location.state as ConfirmationState | null;

  if (!state) {
    return <Navigate to="/" replace />;
  }

  const { name, service, date, time } = state;

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="w-full max-w-md bg-card rounded-2xl shadow-luxury p-8 border border-border/50 text-center">
        <h2 className="text-2xl font-bold text-golden-accent mb-6">
          Booking Confirmed
        </h2>

        <div className="space-y-3 text-left mb-6">
          <p className="text-foreground">
            <span className="font-medium text-muted-foreground">Name: </span>
            {name}
          </p>
          <p className="text-foreground">
            <span className="font-medium text-muted-foreground">Service: </span>
            {service}
          </p>
          <p className="text-foreground">
            <span className="font-medium text-muted-foreground">Date: </span>
            {date}
          </p>
          <p className="text-foreground">
            <span className="font-medium text-muted-foreground">Time: </span>
            {time}
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          You will get a notification shortly once the admin accepts or rejects your booking.
        </p>
      </div>
    </div>
  );
}

export default BookingConfirmation;
