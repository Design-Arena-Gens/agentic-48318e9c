"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description: [
      "Leading frontend development for enterprise-level applications using React and TypeScript",
      "Architected and implemented a micro-frontend solution improving deployment efficiency by 40%",
      "Mentoring junior developers and conducting code reviews",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations Ltd.",
    period: "2023 - 2024",
    description: [
      "Developed responsive web applications using Angular and NgRx for state management",
      "Collaborated with UX designers to implement pixel-perfect interfaces",
      "Optimized application performance resulting in 50% faster load times",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "StartupHub",
    period: "2022 - 2023",
    description: [
      "Built reusable React components and integrated RESTful APIs",
      "Implemented responsive designs using CSS3, SCSS, and Tailwind CSS",
      "Participated in agile development processes and daily standups",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative pl-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="absolute left-5 w-7 h-7 bg-primary rounded-full border-4 border-slate-950"
                  />

                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-primary transition">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-300 flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
