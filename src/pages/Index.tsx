import { useEffect, useState } from 'react';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    
    let scrollY = window.scrollY || 0;
    const speed = 0.5; // Adjust this: 0.1 = very slow, 1.0 = fast
    let animationId: number;
    
    const smoothScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      scrollY += speed;
      
      // Loop back to top when reaching bottom
      if (scrollY >= maxScroll) {
        scrollY = 0;
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, scrollY);
      }
      
      animationId = requestAnimationFrame(smoothScroll);
    };
    
    animationId = requestAnimationFrame(smoothScroll);
    
    // Pause scroll on user interaction
    const handleInteraction = () => {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
    };
    
    window.addEventListener('wheel', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [isPaused]);
  
  return (
    <div 
      className="min-h-screen bg-background relative overflow-x-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="tools">
          <Tools />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
