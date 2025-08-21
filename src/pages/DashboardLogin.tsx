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
        backgroundImage: "url('https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg')", // <-- replace with your URL
      }}
    >
      <div className="p-10 bg-white/90 shadow-2xl rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
          ✨ Glamour Heaven Login ✨
        </h2>
        <input
          type="password"
          placeholder="Enter token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl w-full mb-5 focus:ring-2 focus:ring-orange-500 outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-red-500 text-white p-3 rounded-xl shadow hover:bg-red-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default DashboardLogin;
