import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

        try {
            const res = await fetch(
                "https://api.escuelajs.co/api/v1/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                }
            );

            if (!res.ok) {
                // API returns 401 for wrong credentials
                throw new Error("Invalid email or password");
            }

            const data = await res.json();

            // Expected response:
            // { access_token: "...", refresh_token: "..." }

            console.log("Login success:", data);

            // Store token (simple approach)
            localStorage.setItem("accessToken", data.access_token);

            // Redirect after successful login
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 font-sans">
            {/* Main Card */}
            <div className="bg-[#121212] w-full max-w-md rounded-[20px] p-8 md:p-10 shadow-2xl border border-zinc-800/50">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-10 text-violet-500">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-zinc-400 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-zinc-400 mb-2"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                        />
                    </div>

                    {/* Buttons Area */}
                    <div className="mt-10 space-y-4">
                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 transform active:scale-[0.98] shadow-lg shadow-violet-900/20"
                        >
                            Login
                        </button>

                        {/* Sign Up Link/Button */}
                        {/* Using Link assuming you have a '/signup' route setup */}
                        <Link
                            to="/signup"
                            className="block w-full text-center bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold py-3.5 rounded-xl transition-all duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}