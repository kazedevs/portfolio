import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GitHubContributions from "./components/GitHubContributions";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="min-h-screen bg-background text-foreground pt-16 md:pt-20 px-4 sm:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <AboutMe />
          <div className="my-12 border-t border-border w-full"></div>

          <div id="proof-of-work" className="mb-12">
            <h2 className="text-2xl font-medium items-center justify-center flex mb-6">
              Proof of Work
            </h2>
            <GitHubContributions />
          </div>

          <div className="my-12 border-t border-border w-full"></div>
          <Projects />
          <div className="my-12 border-t border-border w-full"></div>
          <Footer />
        </div>
      </section>
    </>
  );
}
