
"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = {
  github: "https://github.com/ariful-arif124",
  linkedin: "https://www.linkedin.com/",
  email: "your.email@example.com",
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1020] px-6 pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Branding */}
          <div className="md:col-span-2">
            <Link
              href="#home"
              className="mb-5 inline-block text-3xl font-bold"
            >
              Dev<span className="text-purple-400">.</span>
            </Link>

            <p className="mb-7 max-w-md leading-8 text-gray-400">
              Building modern, interactive, and meaningful
              digital experiences through creativity,
              technology, and continuous learning.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-xl border border-white/10 bg-[#151C32] p-3 text-gray-300 transition hover:border-purple-400 hover:text-purple-400"
              >
                <FaGithub size={21} />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-xl border border-white/10 bg-[#151C32] p-3 text-gray-300 transition hover:border-purple-400 hover:text-purple-400"
              >
                <FaLinkedin size={21} />
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Send email"
                className="rounded-xl border border-white/10 bg-[#151C32] p-3 text-gray-300 transition hover:border-purple-400 hover:text-purple-400"
              >
                <Mail size={21} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-purple-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row">
          <p className="text-sm text-gray-400">
            © 2026 Md. Ariful Islam. All rights reserved.
          </p>

          <Link
            href="#home"
            className="flex items-center gap-2 text-sm font-medium text-purple-400 transition hover:text-cyan-400"
          >
            Back to Top
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
