import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Building2, 
  Search, 
  MessageSquare, 
  BarChart3,
  Calendar,
  Globe,
  Zap
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl font-bold">
            Complete HR Management
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage human resources, from recruitment to employee management, all in one integrated platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Platform Statistics */}
        <div className="mt-24 bg-gradient-subtle rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-muted-foreground">Our platform delivers measurable results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlights: string[];
  color: "primary" | "accent" | "success";
}

const FeatureCard = ({ icon: Icon, title, description, highlights, color }: FeatureCardProps) => {
  const colorClasses = {
    primary: "text-primary bg-primary/10",
    accent: "text-accent bg-accent/10",
    success: "text-success bg-success/10"
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 transform border-border/50">
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg ${colorClasses[color]} flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
              {highlight}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const features = [
  {
    icon: Shield,
    title: "Admin Dashboard",
    description: "Comprehensive control panel with role-based access and detailed analytics.",
    highlights: [
      "Role-based access control",
      "Employee & job management",
      "Activity logs & audit trails",
      "Real-time analytics dashboard"
    ],
    color: "primary" as const
  },
  {
    icon: Building2,
    title: "Employer Portal",
    description: "Powerful tools for companies to post jobs and manage recruitment.",
    highlights: [
      "Job posting & management",
      "Applicant tracking system",
      "Interview scheduling",
      "Performance analytics"
    ],
    color: "accent" as const
  },
  {
    icon: Users,
    title: "Job Seeker Platform",
    description: "Intuitive interface for candidates to find and apply for opportunities.",
    highlights: [
      "Advanced job search & filters",
      "Application tracking",
      "Profile management",
      "Real-time notifications"
    ],
    color: "success" as const
  },
  {
    icon: Search,
    title: "Smart Matching",
    description: "AI-powered algorithms to match candidates with the right opportunities.",
    highlights: [
      "Skill-based matching",
      "Location preferences",
      "Salary range optimization",
      "Experience level filtering"
    ],
    color: "primary" as const
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Integrated messaging system with WhatsApp and email notifications.",
    highlights: [
      "Multi-platform messaging",
      "Automated reminders",
      "Application status updates",
      "Interview notifications"
    ],
    color: "accent" as const
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Comprehensive reporting tools for data-driven decision making.",
    highlights: [
      "Recruitment analytics",
      "Performance metrics",
      "CSV/PDF exports",
      "Custom report generation"
    ],
    color: "success" as const
  }
];

const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
  { value: "50+", label: "Countries Supported" },
  { value: "< 2s", label: "Average Load Time" }
];

export default FeaturesSection;