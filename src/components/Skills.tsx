import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Network, 
  Bug, 
  Eye, 
  Terminal, 
  Zap,
  Users,
  Globe,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Network Security",
      icon: <Network className="w-6 h-6" />,
      skills: ["Network Security & Administration", "Firewall & IDS/IPS Management", "Cisco Configuration", "VPN Setup"]
    },
    {
      title: "Threat Detection",
      icon: <Eye className="w-6 h-6" />,
      skills: ["Threat Detection & Incident Response", "SIEM Tools (Wazuh, Splunk)", "Vulnerability Assessment", "CTI Analysis"]
    },
    {
      title: "Penetration Testing",
      icon: <Bug className="w-6 h-6" />,
      skills: ["Penetration Testing Basics", "Vulnerability Assessment (Nmap, Burp Suite)", "CTF Competitions", "Digital Forensics"]
    },
    {
      title: "System Administration",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Windows/Linux Administration", "Endpoint Security", "System Hardening", "Patch Management"]
    },
    {
      title: "DevSecOps",
      icon: <Zap className="w-6 h-6" />,
      skills: ["DevSecOps Practices", "Security Automation", "CI/CD Security", "Infrastructure as Code"]
    },
    {
      title: "AI/ML & Data Analysis",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Data Annotation & Labeling", "Quality Assurance", "ML Data Preparation", "Python Programming"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: ["Team Collaboration & Communication", "Problem-Solving", "Critical Thinking", "Grant Writing"]
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-cyber bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive cybersecurity skills spanning network security, threat detection, 
            and modern DevSecOps practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="transition-cyber hover:shadow-cyber hover:border-cyber-primary/50 animate-float"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-cyber-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="transition-cyber hover:bg-cyber-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;