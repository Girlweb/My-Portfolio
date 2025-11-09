import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Cybersecurity",
      issuer: "Moringa School",
      date: "2024",
      description: "Comprehensive cybersecurity foundation covering threats, risks, vulnerabilities, and security best practices.",
      url: "#"
    },
    {
      title: "Pre Security Learning Path",
      issuer: "TryHackMe",
      date: "2024",
      description: "Completed comprehensive pre-security training covering cyber security basics, networking fundamentals, web security, and Linux operating system. Certificate: THM-8S0TRUZ5A3",
      url: "https://tryhackme.com/certificate/THM-8S0TRUZ5A3"
    },
    {
      title: "ArcX CTI - Cyber Threat Intelligence",
      issuer: "ArcX",
      date: "2024",
      description: "Advanced cyber threat intelligence analysis and threat hunting methodologies.",
      url: "https://share.google/BLeNhnhZuQqv5xw5o"
    },
    {
      title: "TryHackMe Security Badges",
      issuer: "TryHackMe",
      date: "2024",
      description: "Multiple earned badges through practical cybersecurity challenges and hands-on learning via interactive security exercises and CTF challenges.",
      url: "https://tryhackme.com/p/barmulaky"
    }
  ];

  return (
    <section className="py-20 px-6 bg-card/30" id="certifications">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-cyber bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cybersecurity, 
            networking, and emerging technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="transition-cyber hover:shadow-cyber hover:border-cyber-primary/50 animate-float cursor-pointer"
              style={{ animationDelay: `${index * 0.03}s` }}
              onClick={() => cert.url !== "#" && window.open(cert.url, '_blank')}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-cyber-primary/20 rounded-lg">
                    <Award className="w-5 h-5 text-cyber-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.url !== "#" && (
                    <ExternalLink className="w-4 h-4 text-cyber-primary ml-auto" />
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {cert.title}
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {cert.issuer}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          {/* Credly Profile Card */}
          <Card 
            className="transition-cyber hover:shadow-cyber hover:border-cyber-primary/50 animate-float cursor-pointer"
            style={{ animationDelay: `${certifications.length * 0.03}s` }}
            onClick={() => window.open('https://www.credly.com/users/mitchele-jebet', '_blank')}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-cyber-primary/20 rounded-lg">
                  <Award className="w-5 h-5 text-cyber-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-cyber-primary ml-auto" />
              </div>
              <CardTitle className="text-lg leading-tight">
                View All Certifications
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                Credly
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                View my complete certification portfolio including Cisco badges and more on Credly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;