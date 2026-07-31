import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="relative bg-background text-ink min-h-screen selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
