import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardLogin() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Entered token:", token);
    console.log("Env token:", import.meta.env.VITE_ADMIN_TOKEN);

    if (token === import.meta.env.VITE_ADMIN_TOKEN) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } else {
      alert("Invalid token!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580618672591-eb180b1a9731?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="p-10 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
          ✨ Glamour Heaven Login ✨
        </h2>
        <input
          type="password"
          placeholder="Enter token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl w-full mb-5 focus:ring-2 focus:ring-teal-500 outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-teal-600 text-white p-3 rounded-xl shadow hover:bg-teal-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default DashboardLogin;
