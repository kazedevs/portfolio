import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">Get in Touch</h2>
        <p className="text-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you want to discuss a project or just say hi, my inbox is
          always open.
        </p>
        <div className="space-y-3 text-foreground/80 mx-auto text-center">
          <div>
            Email:{" "}
            <Link
              href="mailto:kazed4v@proton.me"
              className="hover:text-foreground transition-colors"
            >
              kazed4v@protonmail.com
            </Link>
          </div>
          <div>
            X:{" "}
            <Link
              href="https://x.com/kazedevs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              @kazedevs
            </Link>
          </div>
          <div className="mb-8">📍 Location: India</div>
        </div>
      </div>
    </div>
  );
}
