import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GitHubContributions from "./components/GitHubContributions";
import LocalTime from "./components/LocalTime";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-background text-foreground pt-12 md:pt-16 px-4 sm:px-6">
        <div className="w-full max-w-3xl mx-auto space-y-4">
          <div className="flex justify-start px-0.5">
            <LocalTime />
          </div>
          <AboutMe />
          <div className="my-8 border-t border-border w-full"></div>

          <div id="proof-of-work" className="mb-8">
            <h2 className="text-xl font-medium items-center justify-center flex mb-4">
              Proof of Work
            </h2>
            <GitHubContributions />
          </div>

          <div className="my-8 border-t border-border w-full"></div>
          <Projects />
          <div className="my-8 border-t border-border w-full"></div>
          <Footer />
        </div>
      </section>
    </>
  );
}
