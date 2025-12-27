"use client";

import { useState, useEffect } from "react";

import * as motion from "framer-motion/client";

export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2 text-muted-foreground/60 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em]"
    >
      <span>{time}</span>
      <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></span>
      <span>IST</span>
    </motion.div>
  );
}
