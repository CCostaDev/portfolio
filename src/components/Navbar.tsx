import { useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const goHome = () => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id?: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-20 select-none">
      <div className="bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] backdrop-blur-md">
        <div className="mx-auto w-full max-w-[90%] md:max-w-[80%]">
          <nav className="flex h-20 items-center justify-between p-5 pb-5">
            {/* left - breadcrumbs */}
            <div
              className="text-x1 cursor-pointer select-none flex items-baseline"
              onClick={goHome}
            >
              <span className="text-(--fg)">CCosta</span>
              <span className="text-accent">Dev</span>
            </div>

            {/* Desktop nav */}
            <ul className="hidden gap-6 text-sm md:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-(--muted) hover:text-(--accent) text-sm md:text-base transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
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
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="border-t border-(--border) bg-(--bg) md:hidden">
          <div className="mx-auto w-full max-w-[90%] md:max-w-[80%]">
            <ul className="flex flex-col gap-1 px-4 py-3 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full rounded-lg px-2 py-2 text-left text-(--muted) hover:bg-(--bg-elevated) hover:text-(--accent)"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
