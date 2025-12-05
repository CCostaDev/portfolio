import Hero from "../components/Hero";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero />

      <FeaturedProjects />

      <Skills />
    </div>
  );
};

export default Home;
