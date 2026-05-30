import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "UPSC", href: "" },
  { label: "UPPCS", href: "" },
  { label: "CURRENT AFFAIRS", href: "" },
  { label: "MMG DAILY ANSWER WRITING", href: "" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed z-50 w-full border-b border-gray-800 bg-[#020817]/50 text-gray-300 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 py-3 sm:py-4 lg:py-5">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex min-w-0 cursor-pointer items-center gap-1.5 sm:gap-2">
            <h1 className="shrink-0 text-2xl font-semibold text-orange-500 sm:text-3xl lg:text-4xl">
              TQ
            </h1>
            <span className="truncate text-lg font-semibold tracking-tight sm:text-2xl lg:text-3xl">
              TerraQuest
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 font-semibold lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-sm transition duration-300 hover:text-orange-500 xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button onClick={() => navigate("/cources")} className="hidden cursor-pointer shrink-0 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold uppercase text-white shadow-lg transition duration-300 hover:bg-orange-600 lg:block xl:px-6 xl:py-3 xl:text-lg">
            Explore Our Courses
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-700 transition duration-300 hover:border-orange-500 lg:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[28rem] border-t border-gray-800 pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-semibold transition duration-300 hover:bg-white/5 hover:text-orange-500 sm:text-base"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="mt-3 w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-bold uppercase text-white shadow-lg transition duration-300 hover:bg-orange-600 sm:text-base"
            >
              Explore Our Courses
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
