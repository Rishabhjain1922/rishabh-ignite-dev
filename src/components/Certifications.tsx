import { Award, Calendar, ExternalLink, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Cloud Computing and Distribution System",
      provider: "NPTEL",
      type: "Technical Certification",
      description: "Comprehensive course covering distributed systems, cloud computing principles, and modern infrastructure management.",
      skills: ["Cloud Computing", "Distributed Systems", "Infrastructure", "Scalability"],
      verified: true,
      credentialId: "NPTEL-CC-2024"
    },
    {
      title: "Database Management System", 
      provider: "NPTEL",
      type: "Technical Certification",
      description: "In-depth study of database design, SQL, transactions, and database optimization techniques.",
      skills: ["SQL", "Database Design", "RDBMS", "Query Optimization"],
      verified: true,
      credentialId: "NPTEL-DBMS-2024"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and 
            commitment to continuous learning in emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="glass glass-hover p-8 rounded-xl space-y-6 group transform transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1 space-y-2">
                  {cert.verified && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-xs text-success font-medium">Verified</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span className="font-medium text-primary">{cert.provider}</span>
                  </div>
                  
                  <div className="text-xs bg-secondary/50 text-muted-foreground px-3 py-1 rounded-full w-fit">
                    {cert.type}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {cert.description}
              </p>

              {/* Skills gained */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground">Skills Gained:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gradient-to-r from-accent/20 to-primary/20 text-foreground px-3 py-1 rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential info */}
              <div className="space-y-3 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Credential ID:</span>
                  <span className="font-mono text-primary">{cert.credentialId}</span>
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full glass border-primary/30 text-foreground hover:text-primary"
                  onClick={() => {
                    const urls = {
                      0: "https://drive.google.com/file/d/1lzCjlpkB0S2Ur_F0GmCs8FS92KBiRZOJ/view?usp=sharing",
                      1: "https://drive.google.com/file/d/1Qoz694pwTp_JzHd1w5tZhu2MhNeonYO_/view?usp=sharing"
                    };
                    window.open(urls[index] || "#", '_blank');
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <div className="glass glass-hover p-8 rounded-xl max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold">
              Continuous <span className="gradient-text">Learning</span>
            </h3>
            
            <p className="text-muted-foreground max-w-xl mx-auto">
              I believe in staying current with emerging technologies and best practices. 
              Currently pursuing additional certifications in machine learning and cloud architecture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Certifications Earned</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold gradient-text">NPTEL</div>
                <div className="text-sm text-muted-foreground">Accredited Institution</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Verification Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;