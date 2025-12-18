import React, { useState } from "react";

// ProductModal.jsx
// Single-file React component that renders a full-screen modal matching the provided design.
// Tailwind CSS required in the project. Uses Picsum for random images by default.

export default function ProductView({ product, open, onClose }) {

 

  const [activeThumb, setActiveThumb] = useState(true);

  function formatPrice(n) {
    return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="fixed inset-0 inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* modal panel */}
      <div className="relative z-10 w-[90%] max-w-6xl rounded-2xl bg-[#0f0f0f] border border-zinc-800 shadow-2xl p-8 flex gap-10">
        {/* left thumbnails */}
        <div className="flex flex-col gap-6 items-center w-24">
          {product.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveThumb(i)}
              className={`w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-200 ${
                i === activeThumb
                  ? "ring-2 ring-violet-500 bg-zinc-800"
                  : "bg-zinc-900/60"
              }`}
            >
              <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* center image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[520px] h-[520px] rounded-xl bg-[#e6e6e6] p-8 flex items-center justify-center">
            <img
              src={product.images[activeThumb]}
              alt={product.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* right details */}
        <div className="w-96 flex flex-col justify-between text-zinc-200">
          <div>
            <button
              onClick={onClose}
              className="mb-6 flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-900/40 border border-zinc-800 text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back</span>
            </button>

            <h2 className="text-4xl font-semibold leading-tight mb-3 text-white">{product.title}</h2>
            <span className="inline-block text-sm px-3 py-1 rounded-full bg-zinc-900/40 border border-zinc-800 text-zinc-300">{product.category}</span>

            <p className="mt-8 text-zinc-400">{product.description}</p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Price</p>
              <p className="text-3xl font-bold text-white mt-1">${formatPrice(product.price)}</p>
            </div>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 shadow-lg text-white font-medium">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

