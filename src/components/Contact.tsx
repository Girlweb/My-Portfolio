import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Heart,
  BookOpen,
  Plane,
  Music,
  Waves,
  Send,
  MessageSquare,
  Award
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      value: "mitchele-jebet",
      href: "https://linkedin.com/in/mitchele-jebet",
      primary: true
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      value: "Girlweb", 
      href: "https://github.com/Girlweb",
      primary: false
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jebetmichele@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const hobbies = [
    { icon: <BookOpen className="w-4 h-4" />, name: "Reading" },
    { icon: <Plane className="w-4 h-4" />, name: "Travelling" },
    { icon: <Music className="w-4 h-4" />, name: "Music" },
    { icon: <Waves className="w-4 h-4" />, name: "Swimming" }
  ];

  const languages = ["English", "Swahili"];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-cyber bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to secure your digital infrastructure? Let's discuss how my cybersecurity 
            expertise can help protect your organization.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Contact Form */}
            <Card className="transition-cyber hover:shadow-cyber hover:border-cyber-primary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyber-primary">
                  <MessageSquare className="w-5 h-5" />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-6">
                  Have a question or want to discuss a project? Feel free to reach out!
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-border focus:border-cyber-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background/50 border-border focus:border-cyber-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background/50 border-border focus:border-cyber-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cyber" 
                    className="w-full"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;