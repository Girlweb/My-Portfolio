import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Network, Bug, Terminal, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Model Training Framework",
      description: "Developed secure AI model training infrastructure with focus on data privacy and model security. Implemented adversarial training techniques, secure model versioning, and automated security testing for ML pipelines.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "MLOps"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI Security",
      githubUrl: "https://github.com/Girlweb",
      liveUrl: "#"
    },
    {
      title: "ADS Framework (Attack Detection System)",
      description: "Built comprehensive intrusion detection and prevention framework using machine learning for real-time threat detection. Implemented anomaly detection algorithms and automated incident response mechanisms.",
      technologies: ["Python", "Scikit-learn", "Suricata", "ELK Stack", "Network Analysis"],
      icon: <Network className="w-6 h-6" />,
      category: "Threat Detection",
      githubUrl: "https://github.com/Girlweb",
      liveUrl: "#"
    },
    {
      title: "AI Data Annotation & Quality Assessment Tool",
      description: "Professional Python-based tool for ML data preparation, featuring systematic image classification, multi-criteria quality assessment, pairwise comparison, consistency checking, and comprehensive report generation in JSON/CSV formats.",
      technologies: ["Python", "Data Annotation", "Quality Assurance", "Machine Learning", "CSV/JSON"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML",
      githubUrl: "https://github.com/Girlweb/ai-data-annotation-tool",
      liveUrl: "#"
    },
    {
      title: "DevSecOps Assessor",
      description: "Comprehensive DevSecOps assessment tool that evaluates CI/CD pipeline security, identifies vulnerabilities in development workflows, and provides automated security recommendations.",
      technologies: ["Python", "Docker", "Jenkins", "GitLab CI", "SonarQube"],
      icon: <Terminal className="w-6 h-6" />,
      category: "DevSecOps",
      githubUrl: "https://github.com/Girlweb/devsecops-pipeline-assessor",
      liveUrl: "#"
    },
    {
      title: "Medical IoT Security Simulation Tool",
      description: "Developed a comprehensive security testing framework for medical IoT devices, simulating attack vectors and vulnerabilities specific to healthcare environments and HIPAA compliance.",
      technologies: ["Python", "Wireshark", "MQTT", "Bluetooth", "Network Analysis"],
      icon: <Shield className="w-6 h-6" />,
      category: "IoT Security",
      githubUrl: "https://github.com/Girlweb/medical_iot_security",
      liveUrl: "#"
    },
    {
      title: "Web Application Penetration Testing Suite",
      description: "Completed advanced web application security lab in PortSwigger Web Security Academy. Successfully identified and exploited OWASP Top 10 vulnerabilities including SQL injection, XSS, and authentication bypasses using Burp Suite and manual testing techniques.",
      technologies: ["Burp Suite", "PortSwigger", "SQLMap", "OWASP ZAP", "Manual Testing"],
      icon: <Bug className="w-6 h-6" />,
      category: "Penetration Testing",
      githubUrl: "https://github.com/Girlweb",
      liveUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-cyber bg-clip-text text-transparent">
            Security Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on cybersecurity projects demonstrating practical skills in network security, 
            threat detection, and security automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="transition-cyber hover:shadow-cyber hover:border-cyber-primary/50 animate-float"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-cyber-primary/20 rounded-lg">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs transition-cyber hover:bg-cyber-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 transition-cyber hover:border-cyber-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button 
                      variant="cyber" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;