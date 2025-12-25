import React from 'react';
import { Zap, ArrowRight, Moon } from 'lucide-react';

export function SolutionsSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2">Explore the solutions</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Features */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Powerful suite of tools</h3>
              <p className="text-zinc-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
              </p>
            </div>

            <div className="space-y-4">
              {/* Active Feature Card */}
              <div className="bg-zinc-900/50 border-2 border-violet-600 p-6 rounded-2xl flex justify-between items-center group cursor-pointer">
                <div>
                  <h4 className="text-xl font-bold mb-2">Simple shoping ecosystem</h4>
                  <p className="text-zinc-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-violet-600/20 p-3 rounded-full text-violet-500">
                  <Zap size={24} />
                </div>
              </div>

              {/* Inactive Feature Cards */}
              <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl flex justify-between items-center opacity-75 hover:opacity-100 transition-all cursor-pointer">
                <div>
                  <h4 className="text-xl font-bold mb-2">Simple shoping ecosystem</h4>
                  <p className="text-zinc-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="text-zinc-500">
                  <ArrowRight size={24} />
                </div>
              </div>
              
              <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl flex justify-between items-center opacity-75 hover:opacity-100 transition-all cursor-pointer">
                <div>
                  <h4 className="text-xl font-bold mb-2">Simple shoping ecosystem</h4>
                  <p className="text-zinc-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="text-zinc-500">
                  <Moon size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex-1 flex justify-center">
            {/* Replace with your actual image URL */}
            <img 
              src="https://react-shop-siza.vercel.app/assets/illustration2-1b2WZaOp.svg" 
              alt="Illustration of shopping" 
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}