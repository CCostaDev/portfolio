import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight hover:opacity-80"
          onClick={closeMenu}
        >
          CCosta<span className="text-accent">Dev</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-slate-300 hover:text-accent transition-colors"
              >
                {" "}
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 h-1[1px] w-0 bg-accent transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-100 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex flex-col gap-[3px]">
            <span
              className={`h-0.5 w-4 rounded-full bg-slate-100 transition-transform ${
                isOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-slate-100 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-slate-100 transition-transform ${
                isOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <ul className="mx-auto flex max-w-5x1 flex-col gap-1 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-2 py-2 text-slate-200 hover:bg-slate-900/70 hover:text-accent"
                >
                  {" "}
                  {item.label}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
