import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinic } from "../data/clinic";
import { telLink } from "../lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#trust", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-700 to-mint-500 grid place-items-center shadow-md">
            <span className="text-white font-display font-bold text-lg">P</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-teal-900">{clinic.name.split(" ")[0]}</div>
            <div className="text-[10px] uppercase tracking-widest text-teal-700/70">Dental Clinic</div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-teal-900/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-teal-700 transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          href={telLink()}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-700 text-white text-sm font-medium hover:bg-teal-900 transition-colors shadow-md hover:shadow-lg"
        >
          <Phone size={15} /> Call Now
        </a>

        <button
          className="md:hidden p-2 text-teal-900"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-white/40 px-5 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-1 text-teal-900 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink()}
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-teal-700 text-white text-sm font-medium"
          >
            <Phone size={15} /> Call Now
          </a>
        </div>
      )}
    </header>
  );
}
