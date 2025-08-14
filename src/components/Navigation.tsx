import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center shadow-glow group-hover:shadow-luxury transition-all duration-300">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Glow Beauty</h1>
              <p className="text-sm text-muted-foreground">Salon & Spa</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+919876543210" 
              className="hidden sm:flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            <Button variant="default" size="sm" className="shadow-soft hover:shadow-glow">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;