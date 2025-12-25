import React from 'react';
// Note: You can use Lucide-React or simple SVGs for the icons
import { Github, Linkedin, Atom, Send, Wind } from 'lucide-react'; 

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* About Developer */}
      <section>
        <h2 className="text-2xl font-bold text-purple-500 mb-4">About Developer</h2>
        <p className="text-zinc-300 leading-relaxed">
          Hello there! I'm <span className="text-blue-400">Ali Zarshenas</span>, the passionate developer behind this website. 
          With a keen eye for detail and a love for crafting seamless digital experiences, 
          I set out to create a unique and user-friendly online shopping platform.
        </p>
      </section>

      {/* Frameworks and Technologies */}
      <section>
        <h2 className="text-2xl font-bold text-purple-500 mb-4">Frameworks and Technologies Used</h2>
        <p className="text-zinc-300 mb-8">
          In the development of this website, I've harnessed the power of the following frameworks and technologies 
          to create a modern, single-page application (SPA):
        </p>
        <div className="flex justify-around items-center py-4">
          <Atom size={48} className="text-blue-400" /> {/* React Icon */}
          <div className="w-12 h-12 bg-zinc-400 rounded-full"></div> {/* Placeholder for Framer Motion */}
          <Wind size={48} className="text-sky-400" /> {/* Tailwind Icon */}
        </div>
      </section>

      {/* Backend Section */}
      <section>
        <h2 className="text-2xl font-bold text-purple-500 mb-4">A Glimpse into the Backend:</h2>
        <p className="text-zinc-300 mb-8">
          While my expertise primarily lies in frontend development, I've integrated Node.js and Express.js on 
          the backend to ensure a robust and efficient server-side infrastructure. This combination allows 
          for smooth communication between the frontend and the server, ensuring a seamless user experience.
        </p>
        <div className="flex justify-center gap-16 items-center">
          <span className="text-3xl font-bold text-zinc-500">node.js</span>
          <span className="text-4xl font-light text-zinc-400">ex</span>
        </div>
      </section>

      {/* Let's Connect */}
      <section>
        <h2 className="text-2xl font-bold text-purple-500 mb-4">Let's Connect</h2>
        <p className="text-zinc-300 mb-8">
          Explore the website, discover the offerings, and if you have any questions or suggestions, 
          I'm here to listen. Your journey through this online shopping experience is as important 
          to me as it is to you. Happy exploring!
        </p>
        <div className="flex justify-center gap-12">
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Linkedin size={40} />
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            <Github size={40} />
          </a>
        </div>
      </section>
    </div>
  );
}