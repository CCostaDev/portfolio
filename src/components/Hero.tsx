import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-[80vh] flex flex-col md:flex-row items-center gap-10 py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
    >
      {/* side text */}
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
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
            className="px-4 py-2 rounded-lg bg-accent text-slate-950 text-sm font-semibold hover:bg-accent/90 transition"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg border border-slate-600 text-slate-200 text-sm hover:border-accent transition"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <div className="h-72 w-72 md:h-56 md:w-56 rounded-4xl border border-accent/40 bg-bg-elevated shadow-[0_0_25px_rgba(214,184,146,0.18)] overflow-hidden">
          <img
            src="/me.jpg"
            alt="Cris"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
