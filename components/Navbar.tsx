
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1020]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="#home" className="text-2xl font-bold">
          Dev<span className="text-purple-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-purple-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href="mailto:hello@example.com"
          className="hidden rounded-full border border-purple-400 px-5 py-2 text-sm transition hover:bg-purple-600 md:block"
        >
          Hire Me
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <div className="flex flex-col gap-5 border-t border-white/10 bg-[#0B1020] px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-purple-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
