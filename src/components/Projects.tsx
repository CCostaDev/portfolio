import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-15 py-12 border-t border-slate-800"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.05 }}
    >
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-border-subtle bg-bg-elevated p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-slate-300 mb-3">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-slate-800 text-[11px] text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-2 text-xs">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  View code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
