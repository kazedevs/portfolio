import Image from "next/image";
import { FaGithub, FaEnvelope, FaBook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TechStack from "./TechStack";
import * as motion from "framer-motion/client";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kazedevs",
    icon: <FaGithub />,
  },
  {
    label: "Email",
    href: "mailto:rajkdbusiness@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "X",
    href: "https://x.com/fiynraj",
    icon: <FaXTwitter />,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: <FaBook />,
  },
];

export default function AboutMe() {
  return (
    <div className="text-foreground space-y-4 sm:space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center w-full gap-4 sm:gap-6"
      >
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 shrink-0 relative">
          <Image
            src="/profile.jpeg"
            alt="Raj"
            width={144}
            height={144}
            className="object-cover w-full h-full rounded-2xl border-2 border-border hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Text Content - Right side with tight spacing */}
        <div className="flex flex-col items-start justify-center -space-y-1">
          <div className="flex flex-wrap items-center gap-3 mb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-none">
              Hi, I'm Raj
            </h1>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-[8px] border border-green-500/30 bg-green-500/10 text-green-500 text-[9px] sm:text-[10px] font-bold">
              <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
              Available
            </div>
          </div>

          <p className="text-sm sm:text-base font-semibold opacity-90 leading-tight mt-0">
            Full Stack Developer
          </p>

          <div className="flex items-center gap-2 mt-1">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-7 h-7 rounded-lg border border-border flex items-center justify-center text-sm text-foreground/80 hover:bg-foreground/5 hover:border-foreground/30 transition-all"
                aria-label={social.label}
                target={social.label === "Resume" ? "_blank" : undefined}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pl-0.5"
      >
        <div className="flex items-center space-x-2 text-[#ff4400]">
          <h2 className="text-base sm:text-xl font-medium tracking-wide text-foreground">
            about me.
          </h2>
        </div>
        <p className="text-sm sm:text-base font-normal tracking-wide text-foreground/90 mt-2 leading-relaxed">
          A CS mind without the academic cage — I learn by doing, shipping, and
          burning through problems.
          <br />
          Right now I'm playing in the worlds of web dev, backend systems, and
          whatever math I need to bend things my way.
          <br />
          currently building something cool for the dev community
        </p>
        <div className="my-6 border-t border-border w-full"></div>
        <TechStack />
      </motion.div>
    </div>
  );
}
