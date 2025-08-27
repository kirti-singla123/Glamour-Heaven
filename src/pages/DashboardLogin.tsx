import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://glamourheaven-backend.onrender.com/api/token/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.json();
      console.log("Login response:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert("Login failed: No token received");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/049/536/562/small_2x/spa-concept-massage-stones-with-towels-and-candles-in-natural-background-photo.jpg')",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="p-6 sm:p-10 bg-white/90 shadow-2xl rounded-2xl w-full max-w-sm sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-orange-600">
          ✨ Glamour Heaven Login ✨
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl w-full mb-4 focus:ring-2 focus:ring-orange-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl w-full mb-5 focus:ring-2 focus:ring-orange-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white p-3 rounded-xl shadow hover:bg-red-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default DashboardLogin;
