import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">

      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#0B1020] px-6 py-24 scroll-mt-20"
      >
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[75vh] max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Left Side: Introduction */}
          <div>
            <p className="mb-5 text-sm font-medium tracking-[0.2em] text-cyan-400">
              HELLO, I'M
            </p>

            <h1 className="mb-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl xl:text-7xl">
              Md. Ariful
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Islam.
              </span>
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-gray-200">
              Web Developer & CSE Student
            </h2>

            <p className="max-w-xl text-lg leading-8 text-gray-400">
              I build modern, responsive, and interactive web
              applications using React, Next.js, and TypeScript.
              Passionate about solving real-world problems
              through creative technology.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 font-medium text-white transition hover:bg-purple-500"
              >
                Explore My Work
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-gray-600 px-7 py-3 font-medium text-white transition hover:border-purple-400"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://github.com/ariful-arif124"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-gray-400 transition hover:text-purple-400"
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>

          {/* Right Side: Profile Picture */}
          <div className="relative mx-auto w-full max-w-md">

            {/* Gradient Glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-3xl" />

            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-purple-400/40 bg-[#151C32] p-2 shadow-2xl shadow-purple-500/10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/my-pic.png"
                  alt="Md. Ariful Islam - Web Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white/10 bg-[#151C32] px-6 py-4 shadow-xl sm:-left-6">
              <p className="text-sm font-semibold text-white">
                Creative Developer
              </p>
              <p className="text-xs text-cyan-400">
                React • Next.js • TypeScript
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
