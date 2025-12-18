import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-700 pt-10 text-gray-400 px-5 lg:px-20">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div className="space-y-3">
          <h3 className="text-purple-400 font-semibold">Terms · Privacy Policy</h3>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>Web Studio</li>
            <li>DynamicBox Flex</li>
            <li>Programming Forms</li>
            <li>Integrations</li>
            <li>Command-line</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Documentation</li>
            <li>Tutorials & Guides</li>
            <li>Blog</li>
            <li>Support Center</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Get the latest news and articles to your inbox every month.
          </p>

          {/* Email Input */}
          <div className="flex items-center border border-gray-600 rounded-xl px-3 py-2 bg-black">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent w-full outline-none text-gray-300 placeholder-gray-500"
            />
            <span className="text-purple-400 text-xl cursor-pointer">→</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-14 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">

        <p className="text-gray-500 text-sm">
          Made with <span className="text-purple-400">♥</span> by Siza
        </p>

        <a
          href="https://github.com"
          target="_blank"
          className="text-gray-300 text-2xl hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
