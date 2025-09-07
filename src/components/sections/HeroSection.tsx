import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Building2, Shield, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Trusted by 1000+ Companies</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Digital
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                {" "}Future
              </span>
              <br />
              from Mithila
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Connect talent with opportunity through our comprehensive Human Resource Planning and Management Platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25k+</div>
              <div className="text-sm text-muted-foreground">Placements</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image & User Type Cards */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={heroImage} 
              alt="Professional team collaboration" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero/20"></div>
          </div>

          {/* Floating User Type Cards */}
          <div className="absolute -bottom-8 -left-8 space-y-4">
            <UserTypeCard 
              icon={Shield}
              title="Admin Portal"
              description="Complete management control"
              color="primary"
            />
          </div>
          
          <div className="absolute top-8 -right-8 space-y-4">
            <UserTypeCard 
              icon={Building2}
              title="For Employers"
              description="Find the perfect talent"
              color="accent"
            />
          </div>
          
          <div className="absolute bottom-1/2 -left-16">
            <UserTypeCard 
              icon={Users}
              title="For Job Seekers"
              description="Discover your next opportunity"
              color="success"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface UserTypeCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: "primary" | "accent" | "success";
}

const UserTypeCard = ({ icon: Icon, title, description, color }: UserTypeCardProps) => {
  const colorClasses = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground", 
    success: "bg-success text-success-foreground"
  };

  return (
    <Card className="p-4 bg-background/95 backdrop-blur shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 transform max-w-xs">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;