import { useEffect, useRef, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { createBooking } from "@/lib/bookingApi";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const CHAT_API_URL = `${API_BASE_URL}/api/chat/`;

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
}

type BookingStep = "idle" | "service" | "date" | "time" | "name" | "phone" | "confirm";

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
}

const EMPTY_BOOKING: BookingData = { service: "", date: "", time: "", name: "", phone: "" };

const BOOKING_INTENT_RE = /\b(book|booking|appointment|schedule|reserve)\b/i;
const CANCEL_RE = /^(cancel|stop|nevermind|never mind|quit)$/i;
const YES_RE = /^(y|yes|yeah|yep|sure|confirm)$/i;
const NO_RE = /^(n|no|nope|nah)$/i;

// Parses dates like "2026-07-10", "07/10/2026", or "July 10 2026".
// Returns the ISO (YYYY-MM-DD) form the backend expects, or an error reason.
function parseBookingDate(text: string): { value: string } | { error: "invalid" | "past" } {
  const trimmed = text.trim();
  let parsed: Date | null = null;

  const isoMatch = trimmed.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  const usMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (isoMatch) {
    parsed = new Date(Number(isoMatch[1]), Number(isoMatch[2]) - 1, Number(isoMatch[3]));
  } else if (usMatch) {
    parsed = new Date(Number(usMatch[3]), Number(usMatch[1]) - 1, Number(usMatch[2]));
  } else {
    const fallback = new Date(trimmed);
    if (!isNaN(fallback.getTime())) parsed = fallback;
  }

  if (!parsed || isNaN(parsed.getTime())) return { error: "invalid" };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  parsed.setHours(0, 0, 0, 0);

  if (parsed.getTime() < today.getTime()) return { error: "past" };

  const yyyy = parsed.getFullYear();
  const mm = String(parsed.getMonth() + 1).padStart(2, "0");
  const dd = String(parsed.getDate()).padStart(2, "0");
  return { value: `${yyyy}-${mm}-${dd}` };
}

// Parses times like "2:30 PM" or "14:30" into 24-hour "HH:MM".
function parseBookingTime(text: string): string | null {
  const trimmed = text.trim().toLowerCase();
  const match = trimmed.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
  if (!match) return null;

  let hour = parseInt(match[1], 10);
  const minute = match[2] ? parseInt(match[2], 10) : 0;
  const meridiem = match[3];

  if (minute > 59) return null;

  if (meridiem) {
    if (hour < 1 || hour > 12) return null;
    if (meridiem === "pm" && hour !== 12) hour += 12;
    if (meridiem === "am" && hour === 12) hour = 0;
  } else if (hour < 0 || hour > 23) {
    return null;
  }

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatDisplayTime(time24: string): string {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

function isValidPhone(text: string): boolean {
  const digits = text.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "ai",
      text: "Hi there! 👋 I'm the Glamour Haven assistant. Ask me about our services, bookings, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState<BookingStep>("idle");
  const [bookingData, setBookingData] = useState<BookingData>(EMPTY_BOOKING);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isOpen]);

  const pushAiMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "ai", text }]);
  };

  const pushUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", text }]);
  };

  const startBooking = () => {
    setBookingData(EMPTY_BOOKING);
    setBookingStep("service");
    pushAiMessage("Great, let's get you booked! Which service would you like to book?");
  };

  const cancelBooking = () => {
    setBookingStep("idle");
    setBookingData(EMPTY_BOOKING);
    pushAiMessage("No problem, I've cancelled that. Let me know if you'd like to start a new booking or ask me anything else!");
  };

  const submitBooking = async (data: BookingData) => {
    setBookingStep("idle");
    setIsLoading(true);
    try {
      const response = await createBooking(data);
      if (response.ok) {
        pushAiMessage(`You're all set, ${data.name}! Taking you to your booking confirmation now...`);
        setIsOpen(false);
        navigate("/booking-confirmation", {
          state: {
            name: data.name,
            service: data.service,
            date: data.date,
            time: data.time,
          },
        });
      } else {
        pushAiMessage("Sorry, I couldn't submit your booking. Please try again, or use the booking form instead.");
      }
    } catch (error) {
      pushAiMessage("I'm having trouble connecting right now. Please try again in a moment.");
    } finally {
      setIsLoading(false);
      setBookingData(EMPTY_BOOKING);
    }
  };

  const handleBookingStep = (text: string) => {
    if (CANCEL_RE.test(text.trim())) {
      cancelBooking();
      return;
    }

    switch (bookingStep) {
      case "service": {
        if (!text.trim()) {
          pushAiMessage("Please tell me which service you'd like to book.");
          return;
        }
        setBookingData((prev) => ({ ...prev, service: text.trim() }));
        setBookingStep("date");
        pushAiMessage(`Got it — ${text.trim()}. What date would you like to come in? (e.g., 2026-07-10)`);
        return;
      }
      case "date": {
        const result = parseBookingDate(text);
        if ("error" in result) {
          pushAiMessage(
            result.error === "past"
              ? "That date has already passed. Please choose an upcoming date, e.g., 2026-07-10."
              : "I couldn't understand that date. Please enter it like 2026-07-10 or 07/10/2026."
          );
          return;
        }
        setBookingData((prev) => ({ ...prev, date: result.value }));
        setBookingStep("time");
        pushAiMessage("What time works best for you? (e.g., 2:30 PM or 14:30)");
        return;
      }
      case "time": {
        const parsedTime = parseBookingTime(text);
        if (!parsedTime) {
          pushAiMessage("I couldn't understand that time. Please enter it like 2:30 PM or 14:30.");
          return;
        }
        setBookingData((prev) => ({ ...prev, time: parsedTime }));
        setBookingStep("name");
        pushAiMessage("What name should we book this under?");
        return;
      }
      case "name": {
        if (text.trim().length < 2) {
          pushAiMessage("Please enter your full name.");
          return;
        }
        setBookingData((prev) => ({ ...prev, name: text.trim() }));
        setBookingStep("phone");
        pushAiMessage("And what's the best phone number to reach you on WhatsApp?");
        return;
      }
      case "phone": {
        if (!isValidPhone(text)) {
          pushAiMessage("That doesn't look like a valid phone number. Please enter at least 10 digits, e.g., 416-555-0123.");
          return;
        }
        const updated = { ...bookingData, phone: text.trim() };
        setBookingData(updated);
        setBookingStep("confirm");
        pushAiMessage(
          `Here's what I have:\n` +
            `Service: ${updated.service}\n` +
            `Date: ${updated.date}\n` +
            `Time: ${formatDisplayTime(updated.time)}\n` +
            `Name: ${updated.name}\n` +
            `Phone: ${updated.phone}\n\n` +
            `Do you want to confirm this booking? (Yes/No)`
        );
        return;
      }
      case "confirm": {
        const lower = text.trim().toLowerCase();
        if (YES_RE.test(lower)) {
          submitBooking(bookingData);
        } else if (NO_RE.test(lower)) {
          cancelBooking();
        } else {
          pushAiMessage('Please reply "yes" to confirm or "no" to cancel.');
        }
        return;
      }
      default:
        return;
    }
  };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setInput("");
    pushUserMessage(trimmed);

    if (bookingStep !== "idle") {
      handleBookingStep(trimmed);
      return;
    }

    if (BOOKING_INTENT_RE.test(trimmed)) {
      startBooking();
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      const data = await res.json();
      const reply: string =
        data.reply ?? data.response ?? data.message ?? "Sorry, I didn't quite catch that.";

      pushAiMessage(reply);
    } catch (error) {
      pushAiMessage("Oops! I'm having trouble connecting right now. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#C4923A] text-white shadow-lg shadow-[#C4923A]/40 transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!isOpen && (
          <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B7355] opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#8B7355]" />
          </span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 flex h-[70vh] max-h-[600px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-[#8B7355]/20 bg-white shadow-2xl animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-300 sm:right-6 sm:w-96"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#C4923A] px-4 py-4 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold leading-tight">Glamour Haven</h2>
              <p className="text-xs text-white/80">We're here to help ✨</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#F5F0E8]/60 px-4 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-[#C4923A] text-white"
                      : "rounded-bl-sm border border-[#8B7355]/15 bg-[#F5F0E8] text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-[#8B7355]/15 bg-[#F5F0E8] px-4 py-3 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#C4923A] [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#C4923A] [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#C4923A]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          {bookingStep === "idle" && !isLoading && (
            <div className="flex justify-start border-t border-[#8B7355]/10 bg-white px-3 pt-2">
              <button
                type="button"
                onClick={startBooking}
                className="rounded-full border border-[#C4923A]/40 bg-[#C4923A]/10 px-3 py-1 text-xs font-medium text-[#8B7355] transition-colors hover:bg-[#C4923A]/20"
              >
                📅 Book a Service
              </button>
            </div>
          )}
          {bookingStep === "confirm" && !isLoading && (
            <div className="flex justify-start gap-2 border-t border-[#8B7355]/10 bg-white px-3 pt-2">
              <button
                type="button"
                onClick={() => submitBooking(bookingData)}
                className="rounded-full bg-[#C4923A] px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-[#C4923A]/90"
              >
                Yes, confirm
              </button>
              <button
                type="button"
                onClick={cancelBooking}
                className="rounded-full border border-[#8B7355]/30 px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100"
              >
                No, cancel
              </button>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 border-t border-[#8B7355]/15 bg-white px-3 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={bookingStep === "idle" ? "Type your message..." : "Type your answer..."}
              disabled={isLoading}
              className="flex-1 rounded-full border border-[#8B7355]/25 bg-[#F5F0E8]/60 px-4 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-[#C4923A] focus:ring-2 focus:ring-[#C4923A]/30 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C4923A] text-white shadow-md transition-transform duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
