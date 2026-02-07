import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import * as motion from "framer-motion/client";
import Image from "next/image";

// Import images statically for automatic LQIP (blur placeholder) generation
import ossbrowserImg from "@/public/Projects/ossbrowser.png";
import resumeiqImg from "@/public/Projects/resumeiq.png";
import ghostlinkImg from "@/public/Projects/ghostlink.png";
import buglogImg from "@/public/Projects/buglog.png";

export default function Projects() {
  const projects = [
    {
      title: "OSSBrowser",
      href: "https://github.com/kazedevs/OSSBrowser",
      live: "https://ossbrowser.vercel.app/",
      desc: "OSSBrowser is a directory for discovering open-source GitHub projects without digging through GitHub. Browse, filter, and jump straight into contributing.",
      image: ossbrowserImg,
    },
    {
      title: "ResumeIQ",
      href: "https://github.com/kazedevs/ResumeIQ",
      live: "https://resume-iq-nine.vercel.app/",
      desc: "ResumeIQ is an AI-powered Resume Analyzer you can create job listings, upload candidate resumes, and use AI to automatically evaluate and match resumes to job requirements.",
      image: resumeiqImg,
    }
    {
      title: "GhostLink",
      href: "https://github.com/kazedevs/GhostLink",
      live: "https://ghost-link-teal.vercel.app",
      desc: "GhostLink is a Temporary file sharing with auto-expiring links. No accounts. No history.",
      image: ghostlinkImg,
    },
    {
      title: "BugLog",
      href: "https://github.com/kazedevs/BugLog",
      live: "https://bug-log.vercel.app",
      desc: "A production-grade issue tracking application for creating, managing, and organizing issues with a clean, scalable architecture",
      image: buglogImg,
    },
  ];

  return (
    <div className="text-foreground space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-2 text-[#ff4400]"
      >
        <h2 className="text-lg sm:text-2xl font-medium tracking-wide text-foreground">
          projects.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-lg bg-muted/40 border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col flex-1 p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2.5">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} github`}
                  >
                    <FaGithub size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <FiArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-[13px] leading-relaxed line-clamp-3">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
