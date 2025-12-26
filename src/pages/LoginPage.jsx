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
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (!res.ok) throw new Error("Invalid email or password");
            const data = await res.json();
            localStorage.setItem("accessToken", data.access_token);


            window.location.reload();
            navigate("/");

        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="wrapper min-h-screen bg-[#0a0a0a] flex justify-center text-white font-sans p-8">
            {/* Main Container - Using the exact classes from your inspector image */}
            <div className="mt-[8%] w-full max-w-[850px] h-max bg-[#121212] border border-[#1e1e1e] rounded-lg p-10 md:p-16 shadow-2xl">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-[#7c3aed] font-extrabold text-5xl mb-3 tracking-tight">
                        Login
                    </h1>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">

                    {/* Email Group */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold tracking-wide text-zinc-200">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white focus:outline-none focus:border-[#7c3aed] transition-all duration-200"
                        />
                    </div>

                    {/* Password Group */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-semibold tracking-wide text-zinc-200">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white focus:outline-none focus:border-[#7c3aed] transition-all duration-200"
                        />
                    </div>

                    {/* Buttons Group - Matching the stacked look in the photo */}
                    <div className="flex flex-col gap-4 mt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#6d28d9] hover:bg-[#7c3aed] text-white font-bold py-4 rounded-lg transition-colors shadow-lg"
                        >
                            Login
                        </button>

                        <Link
                            to="/signup"
                            className="w-full bg-[#27272a] hover:bg-[#3f3f46] text-white font-bold py-4 rounded-lg text-center transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}