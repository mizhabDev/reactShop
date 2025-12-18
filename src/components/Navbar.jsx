import { FaGithub } from "react-icons/fa";
import { FaUser, FaUserPlus } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-14 py-7 border-b border-zinc-800 
                 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50 
                 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://react-shop-siza.vercel.app/assets/AbstractDesign-5_Gpi5_9.svg')",
      }}
    >
      
      <h1 className="text-4xl font-extrabold text-white tracking-wide">
        React Shop
      </h1>

      {/* Center Navigation */}
      <ul className="hidden md:flex gap-8 text-base font-medium">
        <li className="px-7 py-3 rounded-full border border-zinc-700 text-gray-300 hover:text-white hover:border-violet-500 transition cursor-pointer">
          Home
        </li>
        <li className="px-7 py-3 rounded-full border border-zinc-700 text-gray-300 hover:text-white hover:border-violet-500 transition cursor-pointer">
          Products
        </li>
        <li className="px-7 py-3 rounded-full border border-zinc-700 text-gray-300 hover:text-white hover:border-violet-500 transition cursor-pointer">
          About
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Login */}
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-base text-gray-300 hover:text-white hover:border-violet-500 transition">
          <FaUser className="text-lg" />
          Login
        </button>

        {/* Sign Up */}
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-base text-gray-300 hover:text-white hover:border-violet-500 transition">
          <FaUserPlus className="text-lg" />
          Sign Up
        </button>

        {/* GitHub Button */}
        <a
          href="https://github.com"
          target="_blank"
          className="p-4 rounded-full border border-zinc-700 hover:border-violet-500 transition cursor-pointer"
        >
          <FaGithub className="text-2xl text-gray-300 hover:text-white" />
        </a>
      </div>
    </nav>
  );
}
