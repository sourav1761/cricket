"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/registration", label: "Registration" },
    { href: "/sponsorship", label: "Sponsorship" },
    { href: "/More-Info", label: "More Info" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
     { href: "/Privacy", label: "Privacy" },
    { href: "/Terms", label: "Terms" },
     { href: "/Refund", label: "Refund" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-8 left-0 w-full z-[60] flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-6 mt-4">
        {/* Darker frosted header bar */}
        <nav className="relative bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl px-5 py-4 md:py-5">
          {/* --- Mobile Header --- */}
          <div className="flex justify-between items-center md:hidden">
            <span className="text-white font-bold text-lg">Menu</span>
            <button
              onClick={toggleMenu}
              className="p-3 rounded-xl text-white border border-white/30 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* --- Desktop Navigation --- */}
          <div className="hidden md:flex justify-center">
            <ul className="flex flex-row gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 ease-out border border-transparent hover:bg-white/20 hover:border-white/30 hover:shadow-lg ${
                      currentPath === item.href
                        ? "bg-white/20 border-white/40 shadow-lg"
                        : "hover:text-green-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Mobile Navigation --- */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-3 items-center">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-center px-6 py-4 rounded-xl text-white font-semibold text-base transition-all duration-300 border border-transparent hover:bg-white/20 hover:border-white/30 hover:shadow-lg active:bg-white/30 ${
                      currentPath === item.href
                        ? "bg-white/20 border-white/40 shadow-lg"
                        : "hover:text-green-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
