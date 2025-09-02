import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import FirstSection from "./components/sections/FirstSection";
import AboutSection from "./components/sections/AboutSection";

export default function Home() {
  return (
    <div className=" bg-white dark:bg-gray-900">
      <Navbar />
      <FirstSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
