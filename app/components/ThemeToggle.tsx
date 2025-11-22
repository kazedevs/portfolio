"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        console.log("Current theme:", theme);
        console.log("Resolved theme:", resolvedTheme);
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        console.log("Setting theme to:", newTheme);
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-background border border-border shadow-lg text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
