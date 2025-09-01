import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import FirstSection from "./components/sections/FirstSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <FirstSection />
    
      <Footer />
    </div>
  );
}
