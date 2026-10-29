
"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  CalendarDays,
  MapPin,
  Award,
} from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution:
      "Hajee Mohammad Danesh Science and Technology University (HSTU)",
    duration: "Expected Graduation: 2028",
    location: "Dinajpur, Bangladesh",
    description:
      "Pursuing undergraduate studies in Computer Science and Engineering, focusing on programming, data structures, algorithms, database management, and software development.",
    status: "Currently Studying",
    icon: GraduationCap,
    skills: [
      "Programming",
      "Data Structures",
      "Algorithms",
      "Web Development",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Saidpur Cantonment Public School & College , Saidpur",
    duration: "March 2022 – October 2023",
    location: "Bangladesh",
    description:
      "Completed higher secondary education, building a strong academic foundation for university-level studies.",
    status: "Completed",
    icon: BookOpen,
    skills: [],
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Nilphamari Govt. High School , Nilphamari",
    duration: "Completed 2021",
    location: "Bangladesh",
    description:
      "Completed secondary education and developed foundational knowledge in mathematics, science, and other academic subjects.",
    status: "Completed",
    icon: Award,
    skills: [],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 bg-[#0B1020] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-cyan-400">
            MY ACADEMIC JOURNEY
          </p>

          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education.
            </span>
          </h2>

          <p className="max-w-2xl leading-8 text-gray-400">
            My educational journey has shaped my interest
            in technology, programming, and software
            development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative ml-3 border-l-2 border-purple-500/30 md:ml-6">

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="relative mb-10 ml-7 last:mb-0 md:ml-12"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[37px] top-9 h-4 w-4 rounded-full border-4 border-[#0B1020] bg-purple-400 ring-2 ring-purple-500/40 md:-left-[57px]" />

                {/* Education Card */}
                <div className="group rounded-2xl border border-white/10 bg-[#151C32] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 md:p-8">

                  {/* Header */}
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div className="rounded-xl bg-purple-500/15 p-4">
                      <Icon
                        size={28}
                        className="text-purple-400"
                      />
                    </div>

                    <span
                      className={`rounded-full border px-4 py-2 text-xs font-medium ${
                        item.status === "Currently Studying"
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                          : "border-purple-400/30 bg-purple-500/10 text-purple-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="mb-5 font-medium text-purple-300">
                    {item.institution}
                  </p>

                  {/* Duration and Location */}
                  <div className="mb-6 flex flex-wrap gap-5 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={17}
                        className="text-cyan-400"
                      />
                      {item.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin
                        size={17}
                        className="text-cyan-400"
                      />
                      {item.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="leading-8 text-gray-400">
                    {item.description}
                  </p>

                  {/* Skills */}
                  {item.skills.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-[#0B1020] px-4 py-2 text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
