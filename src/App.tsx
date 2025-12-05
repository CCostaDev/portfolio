import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-(--bg) text-(--fg)">
      <div className="mx-auto flex min-h-screen w-full max-w-[90%] md:max-w-[80%] flex-col">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 pt-20">
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
