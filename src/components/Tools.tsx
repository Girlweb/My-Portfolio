import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, Bug, Eye, Server, Code, Globe } from "lucide-react";

const Tools = () => {
  const toolCategories = [
    {
      title: "Penetration Testing",
      icon: <Bug className="w-5 h-5" />,
      tools: ["Kali Linux", "Metasploit", "Burp Suite", "SQLMap", "Hydra", "John the Ripper", "Hashcat", "Aircrack-ng"]
    },
    {
      title: "Network Analysis",
      icon: <Network className="w-5 h-5" />,
      tools: ["Wireshark", "Nmap", "Netcat", "TCPDump", "Nessus", "OpenVAS", "Angry IP Scanner"]
    },
    {
      title: "SIEM & Monitoring",
      icon: <Eye className="w-5 h-5" />,
      tools: ["Wazuh", "Splunk", "Security Onion", "ELK Stack", "Snort", "Suricata", "OSSEC"]
    },
    {
      title: "Web Application Testing",
      icon: <Globe className="w-5 h-5" />,
      tools: ["OWASP ZAP", "Nikto", "Wfuzz", "Dirb", "Gobuster", "WPScan", "Nuclei"]
    },
    {
      title: "Vulnerability Assessment",
      icon: <Shield className="w-5 h-5" />,
      tools: ["Nessus", "OpenVAS", "Qualys", "Acunetix", "Nexpose", "Nikto", "Lynis"]
    },
    {
      title: "DevOps & Automation",
      icon: <Code className="w-5 h-5" />,
      tools: ["Docker", "Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Terraform", "SonarQube"]
    },
    {
      title: "Operating Systems",
      icon: <Server className="w-5 h-5" />,
      tools: ["Ubuntu", "Red Hat Enterprise", "Windows Server", "Metasploitable", "VyOS", "Parrot OS"]
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="tools">
      <div className="absolute inset-0 gradient-cyber-subtle opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-cyber bg-clip-text text-transparent">
            Security Tools & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive cybersecurity toolkit and platforms for penetration testing, 
            network analysis, and security monitoring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {toolCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group relative overflow-hidden border-cyber-primary/20 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:shadow-cyber-lg hover:border-cyber-primary/50 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute inset-0 gradient-cyber opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="flex items-center gap-3 text-cyber-primary group-hover:text-cyber-primary-glow transition-colors">
                  <div className="p-2 rounded-lg bg-cyber-primary/10 group-hover:bg-cyber-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={tool} 
                      variant="secondary" 
                      className="transition-all duration-200 hover:scale-105 hover:shadow-glow-subtle text-xs"
                      style={{ animationDelay: `${toolIndex * 0.02}s` }}
                    >
                      {tool}
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

export default Tools;