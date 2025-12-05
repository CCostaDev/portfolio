import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="scroll-mt-15 py-12 border-t border-slate-800"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-x1 font-semibold mb-3">About</h2>
      <p className="text-sm text-text-muted max-w-x1">
        I'm a junior developer who enjoys building practical things, from React
        apps to Discord and AI-powered bots. I recently moved from the UK to the
        Netherlands and I'm open to junior frontend, backend or full-stack
        roles.
      </p>
    </motion.section>
  );
};

export default About;
