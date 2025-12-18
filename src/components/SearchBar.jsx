import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-3 bg-[#0f0f0f] border border-gray-700 rounded-2xl px-5 py-3 shadow-lg">
        <FaSearch className="text-purple-400 text-xl" />

        <input
          type="text"
          placeholder="Search ..."
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-500"
        />
      </div>
    </div>
  );
}
 