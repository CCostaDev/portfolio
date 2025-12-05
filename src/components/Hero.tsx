import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="min-h-[70vh] flex flex-col justify-center gap-6 py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
    >
      {/* side text */}
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        Junior Software Developer
      </p>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Hey, I'm <span className="text-accent">Cris</span>.
      </h1>

      <p className="max-w-xl text-sm md:text-base text-muted leading-relaxed">
        I'm a junior frontend developer who enjoys turning ideas into clean
        functional interfaces. In short, I like building things and watching
        them come to life.
      </p>

      <p className="text-xs text-muted">
        Currently: improving my React / Typescript skills, building personal
        projects, and applying for junior roles in the Netherlands.
      </p>

      {/* links row */}
      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
        <a
          href="#projects"
          className="rounded-lg border border-accent px-4 py-2 font-medium text-accent hover:bg-accent/10 transition"
        >
          View projects
        </a>
        <a href="#contact" className="text-muted hover:text-accent transition">
          Contact me
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
