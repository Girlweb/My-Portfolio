import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-card/30" id="experience">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-cyber bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in cybersecurity education and practical experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Education */}
          <Card className="transition-cyber hover:shadow-cyber hover:border-cyber-primary/50">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-primary/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyber-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">Cybersecurity Education</CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>2024-2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Moringa School</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive cybersecurity and computer networking program with hands-on experience 
                in security configurations, digital forensics, and competitive Capture the Flag (CTF) challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Cybersecurity Fundamentals</Badge>
                <Badge variant="secondary">Network Security</Badge>
                <Badge variant="secondary">Digital Forensics</Badge>
                <Badge variant="secondary">CTF Competitions</Badge>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Experience;