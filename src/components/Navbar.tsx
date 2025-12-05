import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/posts", label: "Posts" },
  { to: "/projects", label: "Projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const goHome = () => {
    closeMenu();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-20 select-none">
      <div className="bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] backdrop-blur-md">
        <nav className="flex h-20 items-center justify-between px-5 py-4">
          {/* Logo / Home */}
          <button
            type="button"
            onClick={goHome}
            className="font-jbm text-lg md:text-xl cursor-pointer select-none flex items-baseline hover:opacity-80 transition"
          >
            <span className="text-(--fg)">{`<CCosta`}</span>
            <span className="text-accent">Dev</span>
            <span className="text-(--fg)">{`/>`}</span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden gap-6 text-sm md:flex font-jbm">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-sm md:text-base transition ${
                      isActive
                        ? "text-accent"
                        : "text-(--muted) hover:text-(--accent)"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Resume link */}
            <li>
              <a
                href="/public/Resume_CCosta2026_JSD.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm md:text-base text-(--muted) hover:text-(--accent) transition"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-(--border) px-2 py-1 text-xs text-(--fg) md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-[3px]">
              <span
                className={`h-0.5 w-4 rounded-full bg-(--fg) transition-transform ${
                  isOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-(--fg) transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-4 rounded-full bg-(--fg) transition-transform ${
                  isOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="border-t border-(--border) bg-(--bg) md:hidden">
          <div className="mx-auto w-full max-w-[90%] md:max-w-[80%]">
            <ul className="flex flex-col gap-1 px-4 py-3 text-sm font-jbm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block w-full rounded-lg px-2 py-2 text-left transition ${
                        isActive
                          ? "text-accent"
                          : "text-(--muted) hover:bg-(--bg-elevated) hover:text-(--accent)"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              <li>
                <a
                  href="/public/Resume_CCosta2026_JSD.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-lg px-2 py-2 text-left text-(--muted) hover:bg-(--bg-elevated) hover:text-(--accent) transition"
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
