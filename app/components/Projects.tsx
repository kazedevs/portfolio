import { FaGithub } from "react-icons/fa";
import * as motion from "framer-motion/client";

export default function Projects() {
  return (
    <div className="text-foreground space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2 text-[#ff4400]"
      >
        <span className="text-xl sm:text-2xl font-bold font-mono">&gt;</span>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-wide text-foreground">
          projects
        </h2>
      </motion.div>
      <ul className="space-y-6">
        {[
          {
            title: "Fileflow",
            href: "https://github.com/yourname/project-one",
            desc: "A secure and user-friendly web application that allows users to easily upload and share files with others.",
          },
          {
            title: "Hollow CLI",
            href: "https://github.com/yourname/project-two",
            desc: "A powerful CLI tool to analyze and manage project dependencies. Find unused and missing dependencies with a beautiful interface.",
          },
          {
            title: "YtToolBox",
            href: "https://github.com/kazedevs/YtToolBox",
            desc: "YtToolBox is a free browser-based toolkit that lets you download YouTube thumbnails, titles, comments, channel images, and audio, plus other quick creator utilities.",
          },
        ].map((project, index) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-medium">
                {project.title}
              </span>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} github`}
                className="ml-2 hover:opacity-80 text-foreground"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <p className="text-foreground/60 text-sm">{project.desc}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
