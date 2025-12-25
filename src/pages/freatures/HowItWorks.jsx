export function HowItWorks() {
  const steps = [
    { title: "Initial Contact", icon: "🔄" },
    { title: "Discovery Session", icon: "🎯" },
    { title: "Contracting", icon: "🤝" },
    { title: "Fast Prototyping", icon: "🚀" },
    { title: "Design Phase", icon: "🎨" },
    { title: "Develop & Listing for sale", icon: "✨" },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How Simple works</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="bg-[#121212] p-10 rounded-2xl text-center border border-zinc-800/50 hover:border-zinc-700 transition-colors">
            <div className="w-14 h-14 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg shadow-violet-900/20">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}