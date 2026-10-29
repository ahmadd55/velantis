const heroImage = "/hero.jpg"; 

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute -inset-[12%]">
          <img
            src={heroImage}
            alt="Luxury Property"
            className="absolute inset-0 w-full h-full object-cover object-center hero-image"
          />
        </div>

      
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full min-h-[92vh] px-6 -translate-y-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>

            <span className="uppercase tracking-[4px] text-xs font-semibold text-white/90">
              Saudi Arabia's trusted property marketplace
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Find your home in the Kingdom
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/75 leading-8 max-w-2xl">
            Resale villas, off-plan communities, and investment opportunities —
            tailored for citizens, residents, and investors.
          </p>
        </div>
      </div>
    </section>
  );
}
