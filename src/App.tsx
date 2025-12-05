import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-(--bg) text-(--fg)">
      <div className="mx-auto w-full max-w-[90%] md:max-w-[80%]">
        <Navbar />

        <main className="mx-auto w-full max-w-[90%] md:max-w-[80%] pt-24 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
