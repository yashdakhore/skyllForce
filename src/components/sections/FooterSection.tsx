import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import skillForceLogo from "@/assets/skillforce-logo.png";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-background border-t">
      {/* CTA Section */}
      <div className="bg-gradient-hero">
        <div className="container py-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your HR Process?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of companies already using SkillForce International to streamline their recruitment and HR management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img src={skillForceLogo} alt="SkillForce International" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  SkillForce
                </span>
                <span className="text-sm text-muted-foreground">International</span>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Empowering Digital Future from Mithila. A comprehensive Human Resource Planning and Management Platform connecting talent with opportunity.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Darbhanga, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 91020 05317</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>vidyarthi.ia@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Employers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Find Talent</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Employer Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Job Seekers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Find Jobs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Salary Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2025 SkillForce International. All rights reserved. | Powered by{" "}
            <a href="https://mithilastack.com" className="text-primary hover:underline">
              Mithila Stack
            </a>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;