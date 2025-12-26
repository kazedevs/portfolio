import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "ResumeIQ",
              href: "https://github.com/kazedevs/ResumeIQ",
              live: "https://resume-iq-nine.vercel.app/",
              desc: "ResumeIQ is an AI-powered Resume Analyzer you can create job listings, upload candidate resumes, and use AI to automatically evaluate and match resumes to job requirements.",
              image: "/Projects/resumeiq.png",
            },
            {
              title: "FileFlow",
              href: "https://github.com/kazedevs/fileflow",
              live: "https://fileflow-rho.vercel.app/",
              desc: "FileFlow is a secure and user-friendly web application that allows users to easily upload and share files with others.",
              image: "/Projects/file_flow.png",
            },
            {
              title: "YtToolBox",
              href: "https://github.com/kazedevs/yttoolbox",
              live: "https://yttoolbox.com",
              desc: "YtToolBox is a free browser-based toolkit that lets you download YouTube thumbnails, titles, comments, channel images, and audio, plus other quick creator utilities.",
              image: "/Projects/yttoolbox.png",
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-muted/40 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex flex-col flex-1 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#ff4400] transition-colors"
                      aria-label={`${project.title} github`}
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#ff4400] transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
    </div>
  );
}
