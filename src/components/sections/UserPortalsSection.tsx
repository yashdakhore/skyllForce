import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Building2, 
  ArrowRight,
  CheckCircle,
  Star,
  Briefcase,
  TrendingUp
} from "lucide-react";

const UserPortalsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Three Powerful Portals
          </Badge>
          <h2 className="text-4xl font-bold">
            Solutions for Every
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Stakeholder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored experiences for administrators, employers, and job seekers with dedicated web and mobile applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <PortalCard key={index} {...portal} />
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-8">Built with Modern Technology</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface PortalCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: "primary" | "accent" | "success";
  badge: string;
}

const PortalCard = ({ icon: Icon, title, description, features, color, badge }: PortalCardProps) => {
  const colorClasses = {
    primary: "from-primary to-primary-glow",
    accent: "from-accent to-accent-glow",
    success: "from-success to-success/80"
  };

  const iconColorClasses = {
    primary: "text-primary bg-primary/10",
    accent: "text-accent bg-accent/10",
    success: "text-success bg-success/10"
  };

  return (
    <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-500 hover:scale-105 transform border-border/50">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl ${iconColorClasses[color]} flex items-center justify-center`}>
            <Icon className="h-7 w-7" />
          </div>
          <Badge variant="secondary" className="text-xs font-medium">
            {badge}
          </Badge>
        </div>
        
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative space-y-6">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

const portals = [
  {
    icon: Shield,
    title: "Admin Dashboard",
    description: "Complete administrative control with advanced analytics, user management, and system configuration tools.",
    features: [
      "Role-based access control",
      "Employee & job seeker management",
      "Analytics & reporting dashboard",
      "Activity logs & audit trails",
      "System configuration settings",
      "Multi-language support"
    ],
    color: "primary" as const,
    badge: "Full Control"
  },
  {
    icon: Building2,
    title: "Employer Portal", 
    description: "Comprehensive recruitment tools for companies to post jobs, track applications, and manage hiring processes.",
    features: [
      "Job posting & management",
      "Applicant tracking system",
      "Interview scheduling tools",
      "Team collaboration features",
      "Performance analytics",
      "WhatsApp & email integration"
    ],
    color: "accent" as const,
    badge: "Web & Mobile"
  },
  {
    icon: Users,
    title: "Job Seeker Platform",
    description: "User-friendly interface for candidates to discover opportunities, apply for jobs, and track application status.",
    features: [
      "Advanced job search & filters",
      "One-click job applications",
      "Application status tracking",
      "Profile & resume management",
      "Real-time notifications",
      "Career guidance tools"
    ],
    color: "success" as const,
    badge: "Cross Platform"
  }
];

const techStack = [
  "Next.js", "Node.js", "TypeScript", "MongoDB", "Flutter", "Docker", "Jenkins", "WhatsApp API"
];

export default UserPortalsSection;