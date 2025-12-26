
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



// Using a mock navigation and Link for the preview environment
const Link = ({ to, children, className, onClick }) => (
  <a 
    href="#" 
    className={className} 
    onClick={(e) => { e.preventDefault(); onClick && onClick(to); }}
  >
    {children}
  </a>
);

function SignUpPage({ navigate }) {
   navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + formData.name
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create account");
      }

      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex justify-center text-white font-sans p-8 selection:bg-violet-500/30">
      <div className="mt-[6%] w-full max-w-[850px] h-max bg-[#121212] border border-[#1e1e1e] rounded-lg p-10 md:p-16 shadow-2xl transition-all duration-300">
        
        <div className="text-center mb-10">
          <h1 className="text-[#7c3aed] font-extrabold text-5xl md:text-6xl mb-4 tracking-tighter">
            Create Account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold tracking-wide text-zinc-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold tracking-wide text-zinc-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all duration-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-semibold tracking-wide text-zinc-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all duration-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="text-sm font-semibold tracking-wide text-zinc-300">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6d28d9] hover:bg-[#7c3aed] text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-violet-900/10 active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

            <Link
              to="/login"
              onClick={navigate}
              className="w-full bg-[#27272a] hover:bg-[#3f3f46] text-white font-bold py-4 rounded-lg text-center transition-all duration-200"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

const App = () => {
  const [view, setView] = React.useState('signup');
  const navigate = (path) => setView(path === '/login' ? 'login' : 'signup');

  if (view === 'login') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Login Page</h1>
        <button 
          onClick={() => setView('signup')}
          className="bg-zinc-800 px-6 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
        >
          Back to Sign Up
        </button>
      </div>
    );
  }

  return <SignUpPage navigate={navigate} />;
};

export default App;