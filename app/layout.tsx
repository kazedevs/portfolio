import type { Metadata } from "next";
import { Instrument_Serif, Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeToggle from "./components/ThemeToggle";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const openSans = Open_Sans({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Raj",
  description: "personal portfolio",
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="overflow-x-hidden"
    >
      <body
        className={`${instrumentSerif.variable} ${openSans.variable} antialiased bg-background text-foreground overflow-x-hidden transition-colors duration-300`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative min-h-screen w-screen overflow-x-hidden">
            <div className="w-full">
              <div className="mx-auto w-full">{children}</div>
            </div>
            <ThemeToggle />
          </div>
        </Providers>
      </body>
    </html>
  );
}
