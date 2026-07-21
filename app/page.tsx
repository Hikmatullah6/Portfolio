import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-white">
      <Navbar />
      <div className="p-4 lg:px-25">
        <Hero />
        <Reveal><TechStack /></Reveal>
        <Reveal><WorkExperience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </div>
      <Footer />
    </main>
  );
}
