export function Testimonials() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-zinc-500 text-sm mb-12">Trusted by over 20,000 companies all over the world</p>
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale invert mb-24">
          <span className="text-2xl font-bold">facebook</span>
          <span className="text-2xl font-bold">tinder</span>
          <span className="text-2xl font-bold">airbnb</span>
          <span className="text-2xl font-bold">HubSpot</span>
          <span className="text-2xl font-bold">amazon</span>
        </div>

        {/* Testimonial Card */}
        <div className="relative mt-20 pt-16 pb-12 px-8 border border-violet-500/50 rounded-lg max-w-3xl mx-auto bg-[#0a0a0a]">
          {/* Profile Pic */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="User" 
              className="w-24 h-24 rounded-full border-4 border-black shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 text-violet-500 text-4xl font-serif">“</div>
          </div>
          
          <p className="text-xl text-zinc-300 italic mb-8 leading-relaxed">
            " I love this product and would recommend it to anyone. Could be not easier to use, and our multiple Branch are doing wonderful. We get nice comments all the time. "
          </p>
          
          <h4 className="font-bold text-lg">Darya Finger</h4>
          <p className="text-zinc-500 text-sm">CEO & Co-Founder <span className="text-violet-500">@Ashon</span></p>
        </div>
      </div>
    </section>
  );
}