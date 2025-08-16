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
              Software Engineer | Full-Stack Developer | Backend Development
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
              onClick={() => window.open('https://drive.google.com/file/d/1_ZIViPpQjBZ4b5z3OfMN2ojqZbicGD9I/view?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass glass-hover border-primary/30 text-foreground font-medium px-8 py-3 rounded-xl"
              onClick={() => window.location.href = '#contact'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center items-center pt-8">
            <a 
              href="https://www.linkedin.com/in/rishabh-jain-22a19422a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a 
              href="https://github.com/Rishabhjain1922" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a 
              href="https://leetcode.com/u/Rishabhjain1922/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass glass-hover p-3 rounded-xl text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
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