import { DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiRedis,
} from "react-icons/si";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";

const techStack = [
  {
    name: "TypeScript",
    icon: <TbBrandTypescript className="w-8 h-8" />,
    color: "hover:text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript className="w-8 h-8"/>,
    color: "hover:text-yellow-500"
  },
  {
    name: "React",
    icon: <FaReact className="w-8 h-8" />,
    color: "hover:text-cyan-400",
  },
  {
    name: "Go",
    icon: <FaGolang className="w-8 h-8" />,
    color: "hover:text-blue-400",
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs className="w-8 h-8" />,
    color: "hover:text-white",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-8 h-8" />,
    color: "hover:text-green-500",
  },
  {
    name: "Python",
    icon: <FaPython className="w-8 h-8" />,
    color: "hover:text-yellow-400",
  },
  {
    name: "Java",
    icon: <FaJava className="w-8 h-8" />,
    color: "hover:text-yellow-400",
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-8 h-8" />,
    color: "hover:text-blue-400",
  },
  {
    name: "Redis",
    icon: <SiRedis className="w-8 h-8" />,
    color: "hover:text-red-600",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="w-8 h-8" />,
    color: "hover:text-white",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-8 h-8" />,
    color: "hover:text-cyan-300",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-8 h-8" />,
    color: "hover:text-blue-700",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-8 h-8" />,
    color: "hover:text-green-600",
  },
];

export default function TechStack() {
  return (
    <div className="mt-12">
      <div className="flex items-center space-x-2 text-[#ff4400] mb-6">
        <span className="text-xl sm:text-2xl font-bold font-mono">&gt;</span>
        <h2 className="text-xl sm:text-3xl font-medium tracking-wide text-white">
          stack i use
        </h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 ${tech.color} cursor-default`}
            title={tech.name}
          >
            {tech.icon}
            <span className="mt-2 text-sm text-white/80">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
