
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Update these with your real contact details
const contact = {
  email: "arifulislamapple@gmail.com",
  phone: "+8801326173233",
  location: "Bangladesh",
  github: "https://github.com/ariful-arif124",
  linkedin: "https://www.linkedin.com/",
};

export default function Contact() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
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
            LET&apos;S CONNECT
          </p>

          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Touch.
            </span>
          </h2>

          <p className="max-w-2xl leading-7 text-gray-400">
            Have a project idea, internship opportunity,
            or collaboration in mind? Feel free to reach out.
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Information Card */}
            <div className="rounded-2xl border border-white/10 bg-[#151C32] p-7">

              <h3 className="mb-7 text-xl font-bold text-white">
                Contact Information
              </h3>

              {/* Email */}
              <div className="mb-7 flex items-center gap-4">
                <div className="rounded-xl bg-purple-500/15 p-4">
                  <Mail
                    size={25}
                    className="text-purple-400"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="mb-1 font-semibold text-white">
                    Email Me
                  </h4>

                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all text-sm text-gray-400 transition hover:text-cyan-400"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-7 flex items-center gap-4">
                <div className="rounded-xl bg-purple-500/15 p-4">
                  <Phone
                    size={25}
                    className="text-purple-400"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="mb-1 font-semibold text-white">
                    Call Me
                  </h4>

                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-gray-400 transition hover:text-cyan-400"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-purple-500/15 p-4">
                  <MapPin
                    size={25}
                    className="text-purple-400"
                  />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    Location
                  </h4>

                  <p className="text-sm text-gray-400">
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="rounded-2xl border border-white/10 bg-[#151C32] p-7">
              <h3 className="mb-6 text-xl font-bold text-white">
                Connect With Me
              </h3>

              <div className="flex flex-wrap gap-4">

                {/* GitHub */}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B1020] px-5 py-4 text-gray-300 transition hover:border-purple-400 hover:text-purple-400"
                >
                  <FaGithub size={23} />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my LinkedIn profile"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B1020] px-5 py-4 text-gray-300 transition hover:border-purple-400 hover:text-purple-400"
                >
                  <FaLinkedin size={23} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-white/10 bg-[#151C32] p-7 md:p-9"
            >
              <h3 className="text-xl font-bold text-white">
                Send Me a Message
              </h3>

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-white outline-none transition focus:border-purple-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-white outline-none transition focus:border-purple-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-white outline-none transition focus:border-purple-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-600 px-6 py-4 font-medium text-white transition duration-300 hover:bg-purple-500"
              >
                Send Message
                <Send size={19} />
              </button>

              <p className="text-center text-xs text-gray-400">
                Opens your email application with a prepared message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
