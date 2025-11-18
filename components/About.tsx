"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I'm a passionate frontend developer with 3 years of professional experience building
                modern web applications. My expertise lies in creating intuitive, performant, and
                scalable user interfaces using React and Angular.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I thrive on solving complex problems and transforming designs into pixel-perfect,
                responsive applications. My focus is on writing clean, maintainable code while
                staying up-to-date with the latest industry trends and best practices.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects,
                learning new technologies, or mentoring aspiring developers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Completed", value: "25+" },
                { label: "Technologies", value: "15+" },
                { label: "Client Satisfaction", value: "100%" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-primary transition"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
