import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/20 animate-pulse-glow" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container-max relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Rishabh</span>{" "}
              <span className="text-foreground">Jain</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer | Full-Stack Developer | Problem Solver
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable applications and solving complex problems. 
              Experienced in full-stack development with modern technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass glass-hover border-primary/30 text-foreground font-medium px-8 py-3 rounded-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center items-center pt-8">
            <a 
              href="https://linkedin.com/in/rishabhjain1922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a 
              href="https://leetcode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>

          {/* Stats preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="glass glass-hover p-6 rounded-xl text-center">
              <div className="text-2xl font-bold gradient-text">1920+</div>
              <div className="text-sm text-muted-foreground">LeetCode Rating</div>
            </div>
            
            <div className="glass glass-hover p-6 rounded-xl text-center">
              <div className="text-2xl font-bold gradient-text">800+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            
            <div className="glass glass-hover p-6 rounded-xl text-center">
              <div className="text-2xl font-bold gradient-text">Top 5%</div>
              <div className="text-sm text-muted-foreground">Global Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;