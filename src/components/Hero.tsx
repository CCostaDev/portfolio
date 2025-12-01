const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col md:flex-row items-center gap-10 py-16 md:py-24"
    >
      {/* side text */}
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 mb-3">
          Junior Software Developer
        </p>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Hey, I'm Cris.
        </h1>

        <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl">
          I build practical things: React apps, Discord bots, and AI-powered
          tools. I'm open to junior frontend, backend or full-stack roles and
          I'm happy to learn whatever stack the team uses.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 text-sm font-semibold hover:bg-emerald-400 transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200 text-sm hover:border-emerald-400 transition"
          >
            Contact me
          </a>
        </div>
      </div>

      {/* Placeholder for photo */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="h-40 w-40 md:h-52 md:w-52 rounded-3xl border border-slate-700 bg-linear-to-br from-slate-800 via-slate-900 to-emerald-700 shadow-lg shadow-emerald-500/20 flex items-center justify-center text-[11px] text-slate-200">
          Photo / logo here
        </div>
      </div>
    </section>
  );
};

export default Hero;
