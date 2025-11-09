import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import cyberBg from "@/assets/cyber-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${cyberBg})` }}
      />
      
      <Navigation />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <Skills />
        <Tools />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-card/50 border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Mitchele Jebet. Securing digital futures, one system at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
