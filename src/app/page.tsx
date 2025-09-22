import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import FirstSection from "./components/sections/FirstSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Skill from "./components/sections/Skill";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-gray-900">
      <Navbar />

      <FirstSection />
      <AboutSection />
      <Gallery />
      <Skill />
      <Services />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
