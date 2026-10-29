
"use client";

import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-[#0B1020] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-cyan-400">
            WHAT I WORK WITH
          </p>

          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills.
            </span>
          </h2>

          <p className="max-w-xl leading-7 text-gray-400">
            Technologies and tools I use to design,
            develop, and deploy modern web applications.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-[#151C32] p-7 transition-colors hover:border-purple-400/50"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-xl bg-purple-500/15 p-3">
                    <Icon
                      size={25}
                      className="text-purple-400"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-[#0B1020] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
