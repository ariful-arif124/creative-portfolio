
"use client";

import { motion } from "motion/react";
import {
  Users,
  Megaphone,
  ArrowUpRight,
  Award,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Publicity Coordinator",
    organization:
      "IEEE Computer Society — HSTU Student Branch Chapter",
    duration: "Present",
    description:
      "Contributing to publicity, promotional communication, and outreach initiatives to increase awareness of chapter activities and encourage student engagement.",
    icon: Megaphone,
    responsibilities: [
      "Publicity & Communication",
      "Event Promotion",
      "Team Collaboration",
    ],
  },
  {
    id: 2,
    role: "Assistant Secretary",
    organization: "CSE Club — HSTU",
    duration: "Present",
    description:
      "Supporting the coordination of club activities, organizational communication, and student-focused initiatives within the CSE community.",
    icon: Users,
    responsibilities: [
      "Student Engagement",
      "Event Coordination",
      "Organizational Support",
    ],
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="scroll-mt-20 bg-[#0B1020] px-6 py-24"
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
            BEYOND THE CODE
          </p>

          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
            Leadership &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>

          <p className="max-w-2xl leading-7 text-gray-400">
            Beyond software development, I actively participate
            in student organizations, contributing to teamwork,
            communication, and community engagement.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-[#151C32] p-7 transition-colors hover:border-purple-400/50 md:p-9"
              >
                {/* Card Header */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="rounded-2xl bg-purple-500/15 p-4">
                    <Icon
                      size={30}
                      className="text-purple-400"
                    />
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-400">
                    {item.duration}
                  </span>
                </div>

                {/* Role */}
                <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                  {item.role}
                </h3>

                {/* Organization */}
                <p className="mb-5 text-base font-medium text-purple-300">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="mb-7 leading-8 text-gray-400">
                  {item.description}
                </p>

                {/* Skills Developed */}
                <div className="flex flex-wrap gap-2">
                  {item.responsibilities.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-[#0B1020] px-4 py-2 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-purple-400">
                  <Award size={18} />
                  Leadership Experience
                  <ArrowUpRight size={16} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
