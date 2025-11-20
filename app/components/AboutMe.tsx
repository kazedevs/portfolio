import Image from "next/image";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TechStack from "./TechStack";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kazedevs",
    icon: <FaGithub />,
  },
  {
    label: "Email",
    href: "mailto:kazed4v@proton.me",
    icon: <FaEnvelope />,
  },
  {
    label: "X",
    href: "https://x.com/kazedevs",
    icon: <FaXTwitter />,
  },
];

export default function AboutMe() {
  return (
    <div className="text-white space-y-6 sm:space-y-8">
      <div className="flex flex-col items-center w-full gap-6 md:gap-8 md:flex-row md:items-start md:justify-between">
        {/* Profile Picture - Centered on mobile, right side on desktop */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/10 shrink-0 md:ml-auto order-first md:order-last">
          <Image
            src="/profile.jpeg"
            alt="Raj"
            width={200}
            height={200}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Text Content - Below profile on mobile, left side on desktop */}
        <div className="flex flex-col items-center md:items-start -space-y-2 text-center md:text-left order-last md:order-first">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-none">
            Hi, I'm Raj
          </h1>
          <p className="font-medium opacity-60 text-base -mt-1">@kazedevs</p>
          <p className="text-lg text-white/80 font-medium -mt-1 text-center">
            19 · engineer · building
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-2 w-full">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-medium text-white/80 hover:bg-white/5 transition"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1 sm:pl-2">
        <div className="flex items-center space-x-2 text-[#ff4400]">
          <span className="text-xl sm:text-2xl font-bold font-mono">&gt;</span>
          <h2 className="text-xl sm:text-3xl font-medium tracking-wide text-white">
            about me
          </h2>
        </div>
        <p className="text-lg sm:text-xl font-medium tracking-wide text-white mt-6">
          A CS mind without the academic cage — I learn by doing, shipping, and
          burning through problems.
          <br />
          <br />
          Right now I'm playing in the worlds of web dev, backend systems, and
          whatever math I need to bend things my way.
        </p>
        <p className="text-lg sm:text-xl font-medium tracking-wide text-white mt-6">
          currently building something cool for the dev community
        </p>
        <div className="my-12 border-t border-white/10 w-full"></div>
        <TechStack />
      </div>
    </div>
  );
}
