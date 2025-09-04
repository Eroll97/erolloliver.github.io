import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import FirstSection from "./components/sections/FirstSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Lanyard from "./components/ui/Lanyard";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-gray-900">
      <Navbar />

      <div className="overflow-visible z-0 grid grid-cols-1 lg:grid-cols-2 gap-8 -mt-16 min-h-auto ">
        <FirstSection />

        <Lanyard
          position={[0, 0, 10]}
          gravity={[0, -40, 0]}
        
        />
      </div>
      <hr className="m-20" />

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
