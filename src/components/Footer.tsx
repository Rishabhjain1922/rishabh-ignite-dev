import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-max px-6 py-8">
        <div className="text-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rishabh Jain. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;