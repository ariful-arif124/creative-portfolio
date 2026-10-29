
"use client";

import { motion } from "motion/react";
import {
  Code2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Frontend Development",
  "Problem Solving",
  "Responsive Web Design",
  "Continuous Learning",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1020] px-6 py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-cyan-400">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Me.
            </span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151C32] p-8 sm:p-12">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-purple-500/15">
                <Code2 size={48} className="text-purple-400" />
              </div>

              <div className="mb-4 flex items-center gap-2 text-cyan-400">
                <Sparkles size={18} />
                <span className="text-sm font-medium">
                  Creative Developer
                </span>
              </div>

              <h3 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
                Turning Ideas Into
                <br />
                Digital Reality.
              </h3>

              <p className="leading-8 text-gray-400">
                I enjoy creating beautiful, functional, and
                user-friendly web experiences using modern
                technologies.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-2xl font-semibold leading-snug text-white md:text-3xl">
              Passionate about building meaningful
              digital experiences.
            </h3>

            <p className="mb-5 leading-8 text-gray-400">
              I&apos;m a passionate developer who loves
              transforming ideas into interactive and
              responsive web applications.
            </p>

            <p className="mb-8 leading-8 text-gray-400">
              My interests include frontend development,
              modern UI design, and full-stack applications.
              I enjoy exploring new technologies and improving
              my skills through real-world projects.
            </p>

            {/* Highlights */}
            <div className="mb-9 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-cyan-400"
                  />
                  <span className="text-sm text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 font-medium text-white transition hover:bg-purple-500"
            >
              View My Projects
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
