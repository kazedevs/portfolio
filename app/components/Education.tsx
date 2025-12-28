import * as motion from "framer-motion/client";

const education = [
  {
    school: "Assam Down Town University",
    degree: "b.tech computer science and engineering",
    period: "2024 — 2028",
  }
];

export default function Education() {
  return (
    <section className="space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-1.5 text-[#ff4400]"
      >
        <h2 className="text-base sm:text-xl font-medium tracking-wide text-foreground">
          education.
        </h2>
      </motion.div>

      <div className="space-y-4">
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-x-2">
              <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                {edu.school}
              </h3>
              <span className="text-[11px] sm:text-xs font-medium text-muted-foreground/60 tabular-nums">
                {edu.period}
              </span>
            </div>
            <div className="flex flex-col">
              <p className="text-[13px] font-medium text-foreground/70 uppercase tracking-tight">
                {edu.degree}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
