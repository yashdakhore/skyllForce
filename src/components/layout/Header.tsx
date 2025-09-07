import { Button } from "@/components/ui/button";
import { Users, Building2, Shield } from "lucide-react";
import skillForceLogo from "@/assets/skillforce-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={skillForceLogo} alt="SkillForce International" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SkillForce
            </span>
            <span className="text-xs text-muted-foreground">International</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#solutions" className="text-foreground/80 hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;