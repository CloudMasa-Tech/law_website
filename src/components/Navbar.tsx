import { Menu, Scale, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../siteContent";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-gray-100 bg-white/92 shadow-sm shadow-black/5 bg-blur-header" : "border-b border-gray-100 bg-white/90 bg-blur-header"
      }`}
    >
      <div className="container mx-auto flex h-[68px] items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Law Arena Associates home">
          <Scale className="h-5 w-5 text-black" strokeWidth={1.6} />
          <span className="leading-none">
            <span className="block font-serif text-[16px] font-bold uppercase tracking-[0.14em] sm:text-[18px] lg:text-[20px] lg:tracking-[0.18em]">
              Law Arena
            </span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.42em] text-gray-400 sm:text-[9px] lg:tracking-[0.55em]">
              Associates
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8 xl:gap-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium tracking-[0.08em] text-gray-700 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="whitespace-nowrap bg-black px-7 py-4 text-[11px] font-bold uppercase tracking-[0.32em] text-white transition-colors hover:bg-gray-800"
          >
            Book Consultation
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            className="rounded-full bg-black px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gray-800"
          >
            Consult
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-black"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white/98 px-4 py-6 shadow-xl shadow-black/5 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg border border-transparent px-4 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-gray-700 transition-colors hover:border-gray-200 hover:bg-gray-50 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
