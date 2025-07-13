import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import Notification from "../components/Notification";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(form);
      const { token, admin } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(admin));

      setNotification({ type: "success", message: "Login berhasil!" });

      setTimeout(() => {
        setNotification(null);
        navigate("/");
      }, 1500);
    } catch (err) {
      setNotification({ type: "error", message: "Login gagal, periksa username atau password." });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow w-80">
        <h1 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">Login Aksamedia</h1>

        <input type="text" placeholder="Username" className="w-full px-4 py-2 border mb-3 rounded dark:bg-gray-700 dark:text-white" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border mb-4 rounded dark:bg-gray-700 dark:text-white" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Login
        </button>
      </form>

      {notification && <Notification type={notification.type} message={notification.message} onClose={() => setNotification(null)} />}
    </div>
  );
}
