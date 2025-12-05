type FeaturedProject = {
  title: string;
  role: string;
  description: string;
  image: string;
  tech: string[];
  href?: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "Cinemiser",
    role: "Personal · React · TypeScript · TMDB",
    description:
      "A clean and minimal movie randomiser that helps you pick what to watch using TMDB filters and a clean UI.",
    image: "/images/cinemiser.jpg",
    tech: ["React", "TypeScript", "Vite", "TMDB API", "Tailwind"],
    href: "https://github.com/CCostaDev/cinemiser",
  },
  {
    title: "Akari",
    role: "Discord Bot · Python",
    description:
      "A modular and scalable Discord bot written in Python for fun personal automation, media features, message utilities, and server quality-of-life tools.",
    image: "/images/akari.jpg",
    tech: ["Python", "Discord.py", "FFmpeg", "yt-dlp"],
    href: "https://github.com/CCostaDev/akari",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="space-y-6 scroll-mt-32">
      {/* header row */}
      <div className="flex items-baseline justify-between">
        <h2 className="font-jbm text-2xl md:text-3xl">
          <span className="text-accent">★</span> Featured projects
        </h2>

        <a
          href="/projects"
          className="font-jbm text-xs md:text-sm text-accent hover:opacity-80 transition"
        >
          View all →
        </a>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group border border-(--border) bg-(--bg-elevated) hover:border-(--accent) rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition-colors"
          >
            {/* top: image */}
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* bottom: content */}
            <div className="space-y-3 p-5">
              <div>
                <p className="font-jbm text-[11px] uppercase tracking-wide text-(--muted)">
                  {project.role}
                </p>
                <h3 className="font-jbm text-lg md:text-xl text-(--fg)">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-(--muted)">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] px-2.5 py-0.5 text-[11px] font-jbm text-(--accent)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
