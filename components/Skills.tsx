"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  "Frontend Frameworks": [
    { name: "React", level: 95 },
    { name: "Angular", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Vue.js", level: 75 },
  ],
  "Languages": [
    { name: "TypeScript", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "HTML5", level: 98 },
    { name: "CSS3/SCSS", level: 95 },
  ],
  "Tools & Libraries": [
    { name: "Redux/NgRx", level: 88 },
    { name: "RxJS", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Git", level: 90 },
  ],
  "Other": [
    { name: "REST APIs", level: 92 },
    { name: "GraphQL", level: 80 },
    { name: "Jest/Testing", level: 85 },
    { name: "Webpack", level: 78 },
  ],
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-slate-800/30 p-6 rounded-lg border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-primary mb-6">{category}</h3>
                <div className="space-y-4">
                  {items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-angular rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
