import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      id="top"
      className="min-h-screen bg-[var(--bg)] text-[var(--fg)] relative overflow-hidden"
    >
      {/* softer, darker global glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-hero-glow opacity-70"
      />
      <div className="relative">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
