
import * as motion from "framer-motion/client";

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center px-4 py-4 bg-background"
    >
      <div className="w-full max-w-4xl h-28 sm:h-32 md:h-36 overflow-hidden rounded-2xl relative bg-neutral-900">
        <video
          src="/banner1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full scale-126"
        />
      </div>
    </motion.div>
  );
}
