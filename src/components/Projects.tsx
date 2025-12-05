import { Code2, ExternalLink, Github, Database, Shield, TrendingUp, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FreelancePay Tracker",
      description: "Full-stack web application for freelancers to manage clients, invoices, and payments. Features secure authentication, real-time analytics dashboard, and multi-user data isolation.",
      longDescription: "Built with Flask (Python) backend and vanilla JavaScript frontend. Includes comprehensive API with 16+ automated tests, dark/light theme toggle, and responsive design.",
      tech: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3", "REST API"],
      features: [
        "User authentication with password hashing (SHA-256)",
        "Client & invoice management with CRUD operations",
        "Real-time dashboard analytics showing revenue metrics",
        "Session management & authorization checks",
        "16+ automated test cases with 100% pass rate",
        "Responsive design with dark/light theme"
      ],
      metrics: [
        "16 Test Cases - 100% Success Rate",
        "Multi-user Data Isolation",
        "RESTful API Architecture",
        "Mobile-First Responsive Design"
      ],
      github: "https://github.com/Girlweb/freelance-tracker",
      demo: null,
      icon: <DollarSign className="w-6 h-6" />,
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "LinkedIn Post Generator",
      description: "Production-ready generative AI application processing 1000+ user requests. Engineered sophisticated prompt framework with 95% user satisfaction.",
      longDescription: "Architected using LangChain, Llama3.3 (70B), and Groq Cloud API. Implemented robust API authentication, rate limiting, and comprehensive error handling.",
      tech: ["Python", "LangChain", "Llama3.3", "Groq API", "Streamlit", "NLP"],
      features: [
        "LLM-powered content generation with llama-3.3-70b-versatile",
        "Real-time inference with input validation",
        "API authentication & rate limiting",
        "Secure credential storage & key management",
        "Modular, maintainable codebase with documentation"
      ],
      metrics: [
        "1000+ User Requests Processed",
        "95% User Satisfaction",
        "Production-Grade LLM Integration",
        "Real-time Content Generation"
      ],
      github: "https://github.com/Girlweb/linkedin-post-generator",
      demo: null,
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "AI-Powered Fraud Detection System",
      description: "ML-based fraud detection achieving 99% accuracy across 50,000+ transactions. Built supervised learning pipeline with Random Forest and XGBoost classifiers.",
      longDescription: "Engineered 25+ features including temporal patterns, transaction velocity, and behavioral signatures. Achieved 40% reduction in false positive rate through cross-validation.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "Machine Learning"],
      features: [
        "99% accuracy in anomaly detection",
        "Random Forest & XGBoost ensemble methods",
        "25+ engineered features from raw data",
        "Automated alerting with JSON/CSV reports",
        "Cross-validation & hyperparameter tuning"
      ],
      metrics: [
        "99% Detection Accuracy",
        "50,000+ Transactions Analyzed",
        "40% False Positive Reduction",
        "25+ Engineered Features"
      ],
      github: "https://github.com/Girlweb/ai-data-annotation-tool",
      demo: null,
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "DevSecOps Security Assessment Platform",
      description: "Automated security scanner for CI/CD pipelines combining static analysis with ML-based vulnerability detection. Analyzes 10,000+ code commits.",
      longDescription: "Building pattern recognition algorithms in Python for security risks and compliance violations. Integrates with GitLab CI and Jenkins for automated scanning.",
      tech: ["Python", "Docker", "Jenkins", "GitLab CI", "Terraform", "SonarQube"],
      features: [
        "ML-based vulnerability detection in pipelines",
        "Pattern recognition analyzing 10,000+ commits",
        "Containerized testing with Docker",
        "Infrastructure as Code with Terraform",
        "Comprehensive security reporting dashboard"
      ],
      metrics: [
        "15+ Hours Saved Weekly",
        "50+ Security Issues Identified",
        "10,000+ Code Commits Analyzed",
        "Automated CI/CD Integration"
      ],
      github: "https://github.com/Girlweb/devsecops-pipeline-assessor",
      demo: null,
      icon: <Database className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Network Security & IoT Forensics Tool",
      description: "Automated network traffic analysis tool for IoT device security assessment. Processes 100,000+ packets identifying MQTT vulnerabilities.",
      longDescription: "Built Python scripts for protocol analysis and forensic documentation. Reduced manual analysis time from 8 hours to 45 minutes through automation.",
      tech: ["Python", "Wireshark", "Protocol Analysis", "MQTT", "Network Security"],
      features: [
        "Automated packet analysis processing 100,000+ packets",
        "MQTT protocol weakness detection",
        "Chain-of-custody forensic documentation",
        "Threat modeling with 12 identified vulnerabilities",
        "CVSS scoring & risk prioritization"
      ],
      metrics: [
        "8 Hours → 45 Minutes Analysis Time",
        "100,000+ Packets Processed",
        "12 Critical Vulnerabilities Found",
        "Automated Forensic Reports"
      ],
      github: null,
      demo: null,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-10 h-10 text-cyan-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-ready security tools and applications built from scratch
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-br ${project.color} rounded-lg text-white group-hover:scale-110 transition-transform`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <p className="text-sm text-muted-foreground/80 mt-2 italic">{project.longDescription}</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs text-muted-foreground mb-3 font-semibold">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features & Metrics Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Features */}
                <div>
                  <p className="text-xs text-muted-foreground mb-3 font-semibold">KEY FEATURES</p>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▪</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div>
                  <p className="text-xs text-muted-foreground mb-3 font-semibold">IMPACT & METRICS</p>
                  <div className="space-y-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="p-3 bg-background/50 rounded-lg border border-border/30">
                        <p className="text-sm font-medium text-foreground">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-lg border border-border/50 hover:border-cyan-400/50 transition-all group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 rounded-lg border border-cyan-400/30 hover:border-cyan-400/50 transition-all group/link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Girlweb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-lg border border-border/50 hover:border-cyan-400/50 transition-all"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
