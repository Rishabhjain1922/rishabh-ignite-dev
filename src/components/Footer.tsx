import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-max px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Rishabh Jain</span>
          </div>

          {/* Center */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rishabh Jain. All rights reserved.
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Powered by</span>
            <Coffee className="h-4 w-4 text-amber-500" />
            <span>and passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;