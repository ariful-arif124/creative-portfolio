
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#0B1020] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-cyan-400">
            MY RECENT WORK
          </p>

          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>

          <p className="max-w-2xl leading-7 text-gray-400">
            Explore some of the projects I have built using
            modern web technologies, creative designs,
            and practical problem-solving.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#151C32] transition-colors hover:border-purple-400/50"
            >
              {/* Project Screenshot */}
              <div className="relative aspect-video overflow-hidden bg-[#202942]">
                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151C32]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-6">

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub and Live Links */}
                <div className="flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-purple-400"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
