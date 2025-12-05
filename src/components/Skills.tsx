import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML",
    "CSS",
    "Vite",
  ],
  "Backend / Scripting": [
    "Node.js",
    "Python",
    "Express",
    "REST APIs",
    "MongoDB",
    "SQL (basics)",
  ],
  "AI & Automation": [
    "OpenAI API",
    "RAG (basics)",
    "ChromaDB",
    "Embeddings",
    "API Integrations",
  ],
  Tools: ["Git", "GitHub", "Linux / Raspberry Pi", "Postman", "VS Code"],
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-15 py-12 border-t border-slate-800"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.05 }}
    >
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="grid gap-4 md:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-border-subtle bg-bg-elevated p-4"
          >
            <h3 className="text-sm font-semibold mb-3">{category}</h3>
            <ul className="flex flex-wrap gap-2 text-xs">
              {items.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
