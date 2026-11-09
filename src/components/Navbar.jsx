import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconBtn =
    "grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-base text-ink transition hover:border-accent hover:text-accent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-line bg-bg/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-xl font-extrabold tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Links: inline on desktop, dropdown panel on mobile */}
        <nav
          aria-label="Main"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-16 flex-col gap-1 border-b border-line bg-bg px-5 py-4 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-muted transition hover:text-accent md:px-0"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={iconBtn}
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            type="button"
            className={`${iconBtn} md:hidden`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
