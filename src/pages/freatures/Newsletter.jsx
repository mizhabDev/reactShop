export function Newsletter() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[#121212] rounded-[24px] overflow-hidden relative p-12 md:p-20 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="relative z-10 flex-1 text-white">
          <h2 className="text-2xl font-bold mb-4">Powering your business</h2>
          <p className="text-zinc-400 mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email..." 
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 flex-1"
            />
            <button className="bg-[#6344fd] hover:bg-[#5235e5] text-white px-8 py-3 rounded-lg font-bold transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Abstract Art */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
           {/* Purple Sphere */}
           <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-violet-600 to-indigo-900 rounded-full opacity-80 blur-sm shadow-[0_0_100px_rgba(99,68,253,0.3)]"></div>
           {/* Smaller circles for detail */}
           <div className="absolute right-20 top-10 w-12 h-12 bg-zinc-800 rounded-full opacity-50"></div>
           <div className="absolute right-40 bottom-20 w-8 h-8 bg-zinc-700 rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
}