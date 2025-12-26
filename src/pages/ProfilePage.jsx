import React, { useState, useEffect } from 'react';
import { ShoppingCart, Edit } from 'lucide-react';
import TriangleLoader from '../components/TriangleLoader';

// Mock Link for preview purposes
const Link = ({ to, children, className, onClick }) => (
  <a 
    href="#" 
    className={className} 
    onClick={(e) => { e.preventDefault(); onClick && onClick(to); }}
  >
    {children}
  </a>
);



function ProfilePage({ navigate }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(()=>{
    const fetchUser = async () => {
        const token = localStorage.getItem("accessToken");

        if(!token){
            alert("You are not logged in.")
            navigate("/login")
        }
        try {
            const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
                method : 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                }
            });
            if(!res.ok){
                throw new Error("Failed to fetch profile. Your session might have expired.");
            }

            const data = await res.json();
            setUser(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
            
        };
        

    }
    
    
    fetchUser();
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };


  if (loading) return <TriangleLoader />;


  
  const memberSince = new Date(user.creationAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex justify-center text-white font-sans p-8 selection:bg-violet-500/30 relative">
      {/* Cart Button - Fixed Top Right */}
      <button 
        onClick={() => alert("Cart functionality would open here.")}
        className="absolute top-8 right-8 flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200"
      >
        <ShoppingCart size={20} />
        Cart (0)
      </button>

      <div className="mt-[6%] w-full max-w-[850px] h-max bg-[#121212] border border-[#1e1e1e] rounded-lg p-10 md:p-16 shadow-2xl transition-all duration-300">
        
        {/* Header & Avatar */}
        <div className="text-center mb-10 flex flex-col items-center">
          {/* Avatar with a glow effect */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full p-1 bg-gradient-to-tr from-[#7c3aed] to-violet-500 shadow-2xl shadow-violet-900/20">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full rounded-full object-cover border-4 border-[#121212]"
            />
            <div className="absolute inset-0 rounded-full bg-violet-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          
          <h1 className="text-[#7c3aed] font-extrabold text-4xl md:text-5xl mb-2 tracking-tighter">
            {user.name}
          </h1>
          <p className="text-zinc-400 text-lg">
            {user.email}
          </p>
        </div>

        {/* User Details Section */}
        <div className="flex flex-col gap-y-7">
          
          {/* Name Field (Read-only) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-zinc-300">
              Full Name
            </label>
            <div className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white cursor-default">
              {user.name}
            </div>
          </div>

          {/* Email Field (Read-only) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-zinc-300">
              Email Address
            </label>
            <div className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white cursor-default">
              {user.email}
            </div>
          </div>

          {/* Role & Join Date Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold tracking-wide text-zinc-300">
                Role
              </label>
              <div className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white capitalize cursor-default">
                {user.role}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold tracking-wide text-zinc-300">
                Member Since
              </label>
              <div className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-md px-4 py-4 text-white cursor-default">
                {memberSince}
              </div>
            </div>
          </div>

          {/* Buttons Group */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="button"
              onClick={() => alert("Edit profile functionality would open here.")}
              className="w-full flex items-center justify-center gap-2 bg-[#6d28d9] hover:bg-[#7c3aed] text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-violet-900/10 active:scale-[0.99]"
            >
              <Edit size={20} />
              Edit Profile
            </button>

            <Link
              to="/login"
              onClick={navigate}
              className="w-full bg-[#27272a] hover:bg-[#3f3f46] text-white font-bold py-4 rounded-lg text-center transition-all duration-200"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mock App to render the ProfilePage
const App = () => {
  const [view, setView] = useState('profile');
  const navigate = (path) => setView(path.substring(1));

  if (view === 'login') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Login Page</h1>
        <p className="text-zinc-400">You have been logged out.</p>
        <button 
          onClick={() => setView('profile')}
          className="mt-6 bg-zinc-800 px-6 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
        >
          Log In Again
        </button>
      </div>
    );
  }

  return <ProfilePage navigate={navigate} />;
};

export default App;