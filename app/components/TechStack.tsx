import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiNextdotjs,
  SiDocker,
  SiOpenjdk,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiRedis,
  SiShadcnui,
  SiFramer,
  SiExpress,
  SiPrisma,
  SiPostman,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { Boxes } from "lucide-react";
import * as motion from "framer-motion/client";

const techStack = [
  { name: "ReactJs", icon: <SiReact /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Go", icon: <SiGo /> },
  { name: "Zustand", icon: <Boxes className="w-full h-full" /> },
  { name: "Shadcn", icon: <SiShadcnui /> },
  { name: "Motion", icon: <SiFramer /> },
  { name: "NodeJS", icon: <SiNodedotjs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Java", icon: <SiOpenjdk /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Vercel", icon: <SiVercel /> },
];

export default function TechStack() {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/[0.03] border border-border/40 text-foreground/70 cursor-default hover:bg-foreground/[0.05] hover:border-border/80 transition-all duration-300"
            title={tech.name}
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
              {tech.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
