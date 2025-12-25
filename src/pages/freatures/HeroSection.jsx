import React from 'react';

export function HeroSection() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Make your Outfit{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
            wonderful
          </span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere soluta iusto expedita veniam asperiores, cumque id, tempora numquam voluptatibus.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#6344fd] hover:bg-[#5235e5] text-white px-8 py-4 rounded-full font-bold transition-all">
            Start Shopping
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-bold transition-all border border-zinc-700">
            Learn more
          </button>
        </div>
      </div>
      
      {/* Vertical Line */}
      <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent to-zinc-700"></div>
    </section>
  );
}