import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="text-white space-y-6">
      <div className="flex items-center space-x-2 text-[#ff4400]">
        <span className="text-xl sm:text-2xl font-bold font-mono">&gt;</span>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-wide text-white">
          projects
        </h2>
      </div>
      <ul className="space-y-6">
        <li>
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-medium">Fileflow</span>
            <a
              href="https://github.com/yourname/project-one"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="project-one github"
              className="ml-2 hover:opacity-80"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <p className="text-white/60 text-sm">
            A secure and user-friendly web application that allows users to
            easily upload and share files with others.
          </p>
        </li>
        <li>
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-medium">Hollow CLI</span>
            <a
              href="https://github.com/yourname/project-two"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="project-two github"
              className="ml-2 hover:opacity-80"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <p className="text-white/60 text-sm">
            A powerful CLI tool to analyze and manage project dependencies. Find
            unused and missing dependencies with a beautiful interface.
          </p>
        </li>
        <li>
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-medium">YtToolBox</span>
            <a
              href="https://github.com/kazedevs/YtToolBox"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="project-three github"
              className="ml-2 hover:opacity-80"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <p className="text-white/60 text-sm">
            YtToolBox is a free browser-based toolkit that lets you download
            YouTube thumbnails, titles, comments, channel images, and audio,
            plus other quick creator utilities.
          </p>
        </li>
      </ul>
    </div>
  );
}
