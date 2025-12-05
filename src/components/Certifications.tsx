import { Award, ExternalLink, Shield, Network, TrendingUp, Database } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco Networking Academy",
      date: "2023",
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      credentialId: "CCNA-2023",
      link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
      skills: ["Network Security", "Routing & Switching", "IP Connectivity", "Network Access"]
    },
    {
      name: "ArcX Cyber Threat Intelligence (CTI) Specialist",
      issuer: "ArcX",
      date: "2024",
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      credentialId: "ArcX-CTI-2024",
      link: "https://www.credly.com/users/mitchele-jebet/badges",
      skills: ["Threat Intelligence", "Malware Analysis", "Incident Response", "OSINT"]
    },
    {
      name: "TryHackMe Pre-Security Learning Path",
      issuer: "TryHackMe",
      date: "2024",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      credentialId: "THM-850TRUZ5A3",
      link: "https://tryhackme.com/",
      skills: ["Network Security", "Linux Fundamentals", "Web Security", "Security Principles"]
    },
    {
      name: "Cisco Endpoint Security Badge",
      issuer: "Cisco Networking Academy",
      date: "2025",
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      credentialId: "Cisco-Endpoint-2025",
      link: "https://www.credly.com/users/mitchele-jebet/badges",
      skills: ["Endpoint Protection", "Threat Detection", "Security Operations", "Incident Response"]
    },
    {
      name: "Network Defense Badge",
      issuer: "Cisco Networking Academy",
      date: "2025",
      icon: <Network className="w-8 h-8 text-red-400" />,
      credentialId: "Cisco-Network-Defense-2025",
      link: "https://www.credly.com/users/mitchele-jebet/badges",
      skills: ["Network Security", "Defense Strategies", "Security Architecture", "Threat Prevention"]
    },
    {
      name: "Networking Devices and Initial Configuration Badge",
      issuer: "Cisco Networking Academy",
      date: "2025",
      icon: <Network className="w-8 h-8 text-indigo-400" />,
      credentialId: "Cisco-Networking-Devices-2025",
      link: "https://www.credly.com/users/mitchele-jebet/badges",
      skills: ["Network Configuration", "Router Setup", "Switch Configuration", "Device Management"]
    },
    {
      name: "Networking Basics Badge",
      issuer: "Cisco Networking Academy",
      date: "2024",
      icon: <Network className="w-8 h-8 text-teal-400" />,
      credentialId: "Cisco-Networking-Basics-2024",
      link: "https://www.credly.com/users/mitchele-jebet/badges",
      skills: ["Network Fundamentals", "TCP/IP", "OSI Model", "Network Protocols"]
    },
    {
      name: "Mastercard Cybersecurity Job Simulation",
      issuer: "Mastercard via Forage",
      date: "2025",
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      credentialId: "cGeTsRDfdM7w39SrG",
      link: "https://www.theforage.com/achievements",
      skills: ["Security Design", "Risk Assessment", "Threat Modeling", "Incident Response"]
    },
    {
      name: "Quantium Software Engineering Job Simulation",
      issuer: "Quantium via Forage",
      date: "2025",
      icon: <Code2 className="w-8 h-8 text-pink-400" />,
      credentialId: "vg2AxXKZwcKewQeRD",
      link: "https://www.theforage.com/simulations/quantium/software-engineering-j6ci",
      skills: ["Dash Application Development", "Python Testing", "UI/UX Design", "Bash Scripting"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-cyan-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Certifications & Credentials
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in cybersecurity, networking, and data analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              {/* Icon & Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-background/50 rounded-lg group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>

              {/* Credential ID */}
              <div className="mb-4 p-3 bg-background/30 rounded-lg border border-border/30">
                <p className="text-xs text-muted-foreground mb-1">Credential ID</p>
                <p className="text-sm font-mono text-cyan-400">{cert.credentialId}</p>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group/link"
              >
                <span>Verify Certificate</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All Credentials Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.credly.com/users/mitchele-jebet/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 rounded-lg border border-cyan-400/30 hover:border-cyan-400/50 transition-all"
          >
            <Award className="w-5 h-5" />
            <span className="font-medium">View All Credentials on Credly</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
