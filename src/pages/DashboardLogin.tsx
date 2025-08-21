import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardLogin() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (token === process.env.REACT_APP_ADMIN_TOKEN) {

      localStorage.setItem("dashboardToken", token);
      navigate("/dashboard");
    } else {
      alert("Invalid token!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-bold mb-4">Owner Dashboard Login</h2>
        <input
          type="password"
          placeholder="Enter token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default DashboardLogin;
