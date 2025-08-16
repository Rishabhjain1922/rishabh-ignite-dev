import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Wrench, 
  Brain,
  Coffee,
  Layers,
  Shield,
  Cloud
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "C", level: 60 }
      ]
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: [
        { name: "React", level: 90 },
        { name: "Spring Boot", level: 88 },
        { name: "FastAPI", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 83 },
        { name: "Redis", level: 78 },
        { name: "SQLite", level: 80 }
      ]
    },
    {
      title: "Technologies",
      icon: Wrench,
      skills: [
        { name: "Docker", level: 82 },
        { name: "Kubernetes", level: 75 },
        { name: "Git", level: 88 },
        { name: "Figma", level: 70 },
        { name: "Canva", level: 75 }
      ]
    },
    {
      title: "Concepts",
      icon: Brain,
      skills: [
        { name: "OOP", level: 90 },
        { name: "Data Structures", level: 92 },
        { name: "Operating Systems", level: 80 },
        { name: "DBMS", level: 85 },
        { name: "Computer Networks", level: 78 }
      ]
    },
    {
      title: "Development",
      icon: Globe,
      skills: [
        { name: "Cursor", level: 95 },
        { name: "Figma", level: 75 },
        { name: "n8n", level: 80 },
        { name: "Lovable", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies 
            I use to build exceptional software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass glass-hover p-6 rounded-xl space-y-6 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* Skill bar */}
                    <div className="relative h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideInRight 1s ease-out ${i * 0.1}s both`
                        }}
                      />
                      
                      {/* Glow effect */}
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent/50 to-primary/50 rounded-full blur-sm transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideInRight 1s ease-out ${i * 0.1}s both`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <div className="glass glass-hover p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Additional <span className="gradient-text">Expertise</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl mx-auto w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">Security</h4>
                <p className="text-sm text-muted-foreground">JWT, Authentication</p>
              </div>
              
              <div className="space-y-2">
                <div className="p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl mx-auto w-fit">
                  <Cloud className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">DevOps</h4>
                <p className="text-sm text-muted-foreground">Docker, Kubernetes</p>
              </div>
              
              <div className="space-y-2">
                <div className="p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl mx-auto w-fit">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">Backend</h4>
                <p className="text-sm text-muted-foreground">APIs, Microservices</p>
              </div>
              
              <div className="space-y-2">
                <div className="p-3 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl mx-auto w-fit">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">AI/ML</h4>
                <p className="text-sm text-muted-foreground">Deep Learning, CNN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;