"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce application with shopping cart, payment integration, and admin dashboard",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    tech: ["Angular", "RxJS", "NgRx", "Firebase"],
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with interactive charts and reports",
    tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    image: "bg-gradient-to-br from-pink-500 to-orange-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with location-based forecasts and beautiful UI",
    tech: ["React", "OpenWeather API", "CSS Modules"],
    image: "bg-gradient-to-br from-cyan-500 to-blue-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Generator",
    description: "SaaS tool for developers to create professional portfolios with templates",
    tech: ["Angular", "Material UI", "Express", "PostgreSQL"],
    image: "bg-gradient-to-br from-purple-500 to-indigo-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support and SEO optimization",
    tech: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    image: "bg-gradient-to-br from-yellow-500 to-red-600",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-slate-800/30 rounded-lg border border-slate-700 overflow-hidden hover:border-primary transition-all duration-300"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center`}>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-slate-950/80 rounded-full hover:bg-slate-950 transition"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-slate-950/80 rounded-full hover:bg-slate-950 transition"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
