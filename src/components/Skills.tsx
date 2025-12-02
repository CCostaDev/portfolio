const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  Backend: ["Node.js", "Python", "REST APIs", "MongoDB", "SQL (basics)"],
  Tools: ["Git", "GitHub", "Vite", "Postman", "VS Code"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 border-t border-slate-800">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="grid gap-4 md:grid-cols-3">
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
    </section>
  );
};

export default Skills;
