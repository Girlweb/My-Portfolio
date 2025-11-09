import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const viewCV = () => {
    const cvUrl = window.location.origin + '/Mitchele_Jebet_CV.docx';
    window.open(`https://docs.google.com/viewer?url=${encodeURIComponent(cvUrl)}&embedded=true`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-95" />
      
      {/* Floating security icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Shield className="absolute top-20 left-10 text-cyber-primary/30 w-8 h-8 animate-float" style={{ animationDelay: '0s' }} />
        <Shield className="absolute top-40 right-20 text-cyber-secondary/30 w-6 h-6 animate-float" style={{ animationDelay: '2s' }} />
        <Shield className="absolute bottom-32 left-1/4 text-cyber-accent/30 w-10 h-10 animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center">
            <Badge variant="secondary" className="mb-4 animate-pulse-glow">
              🔒 Cybersecurity Analyst
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-cyber bg-clip-text text-transparent">
              Mitchele Jebet
            </h1>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center mb-6">
              <a 
                href="https://linkedin.com/in/mitchele-jebet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-cyber-primary/10 hover:bg-cyber-primary/20 transition-cyber hover:scale-110 border border-border hover:border-cyber-primary/50"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-cyber-primary" />
              </a>
              <a 
                href="https://github.com/Girlweb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-cyber-primary/10 hover:bg-cyber-primary/20 transition-cyber hover:scale-110 border border-border hover:border-cyber-primary/50"
                title="GitHub"
              >
                <Github className="w-6 h-6 text-cyber-primary" />
              </a>
            </div>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Cybersecurity Analyst | Network Security & Threat Detection
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Detail-oriented cybersecurity analyst with expertise in network security, endpoint protection, and threat detection. 
              Currently on academic break with 20-30+ hours weekly availability. 
              Combining electrical engineering analytical skills with cybersecurity certifications for comprehensive security analysis.
            </p>
            
            
            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="cyber" size="lg" className="animate-pulse-glow" onClick={viewCV}>
                <Shield className="w-5 h-5 mr-2" />
                View CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;