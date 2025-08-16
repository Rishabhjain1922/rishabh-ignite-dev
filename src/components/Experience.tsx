import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "NucleusTeq",
      position: "Software Engineer Intern",
      duration: "01-2025 — 06-2025",
      location: "Indore",
      type: "Full-Stack Development",
      description: "At NucleusTeq, I worked on full-stack development, building robust backend services using Java and Spring Boot, and creating responsive frontends with React.",
      achievements: [
        "Developed scalable applications using Java with Spring Boot for backend logic and React for seamless user interfaces",
        "During my internship at NucleusTeq, I developed scalable applications using Java with Spring Boot for backend logic and React for seamless user interfaces"
      ],
      current: true
    },
    {
      company: "SNS Digitech Pvt.Ltd.",
      position: "Full Stack Developer",
      duration: "11-2024 — 12-2024",
      location: "Indore",
      type: "Full-Stack Development",
      description: "At SNS Digitech Pvt. Ltd., I worked as a full-stack developer, building responsive user interfaces with React and developing secure, RESTful backend services using Java and Spring Boot to support business-critical features.",
      achievements: [
        "Built responsive user interfaces with React and developed secure, RESTful backend services using Java and Spring Boot",
        "Supported business-critical features with robust backend architecture and seamless frontend integration"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience in full-stack development, building scalable applications 
            and robust backend services.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass glass-hover p-8 rounded-xl relative overflow-hidden group"
            >
              {/* Current position indicator */}
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-accent to-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                    Current
                  </div>
                </div>
              )}

              {/* Timeline line */}
              <div className="absolute left-4 top-16 bottom-4 w-0.5 bg-gradient-to-b from-accent to-primary opacity-30" />
              
              <div className="relative">
                <div className="flex items-start gap-6">
                  {/* Company icon */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-gradient-to-r from-accent to-primary rounded-xl">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl font-semibold gradient-text">{exp.company}</h4>
                      
                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;