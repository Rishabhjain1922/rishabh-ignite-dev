import { ExternalLink, Github, Eye, Cpu, Shield, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Desertification Analysis using CNN and EESRGAN",
      description: "Developed a deep learning pipeline using CNN and EESRGAN to detect and enhance desertification imagery. Integrated a real-time web-based dashboard to visualize model predictions, image comparisons, and desertification trends.",
      tech: ["Python", "TensorFlow", "Deep Learning"],
      icon: Cpu,
      year: "2025",
      features: [
        "CNN-based desertification detection",
        "EESRGAN for image enhancement",
        "Real-time dashboard visualization",
        "Model prediction analytics"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Secure Event Organizer",
      description: "Developed a secure, containerized Event Management System using Spring Boot, Spring Security (JWT), PostgreSQL, and Docker with role-based access control.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
      icon: Shield,
      year: "2025",
      features: [
        "JWT-based authentication",
        "Role-based access control",
        "PostgreSQL database integration",
        "Docker containerization"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Built a secure, containerized RESTful e-commerce API with JWT-based authentication, role-based access control, SQLite integration, and features including payment checkout, inventory management, and order processing.",
      tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
      icon: ShoppingCart,
      year: "2025",
      features: [
        "JWT authentication system",
        "Payment processing integration",
        "Inventory management",
        "Order processing workflow"
      ],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background/50 to-background">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development, 
            machine learning, and software engineering skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass glass-hover rounded-xl overflow-hidden group transform transition-all duration-300 hover:scale-105"
            >
              {/* Project header */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-xl">
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                    {project.year}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-gradient-to-r from-accent/20 to-primary/20 text-foreground px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project actions */}
              <div className="p-6 pt-0 space-y-3">
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 glass border-primary/30 text-foreground hover:text-primary"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            variant="outline"
            className="glass glass-hover border-primary/30 text-foreground hover:text-primary px-8 py-3"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;