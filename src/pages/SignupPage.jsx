import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up submitted:", formData);
    // Add your registration logic here
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      avatar: "https://api.lorem.space/image/face?w=640&h=480"
    };

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const err = await res.json();
        console.error("Signup failed:", err);
        alert(err.message || "Signup failed");
        return;
      }

      const data = await res.json();
      console.log("User created:", data);

      navigate("/login");

    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong");
    }


  };

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 font-sans">
      {/* Main Card */}
      <div className="bg-[#121212] w-full max-w-md rounded-[24px] p-8 md:p-10 shadow-2xl border border-zinc-800/50">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-violet-500">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5 ml-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5 ml-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5 ml-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5 ml-1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
            />
          </div>

          {/* Buttons Area */}
          <div className="pt-4 space-y-4">
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 transform active:scale-[0.98] shadow-lg shadow-violet-900/20"
            >
              Sign Up
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-800"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#121212] px-2 text-zinc-500">Already have an account?</span></div>
            </div>

            <Link
              to="/login"
              className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3.5 rounded-xl transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}