import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Award } from "lucide-react";

// Import service images
import facialService from "@/assets/facial-service.jpg";
import hairService from "@/assets/hair-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";

const Index = () => {
  const featuredServices = [
    {
      title: "Signature Facial",
      description: "Deep cleansing and rejuvenating facial treatment for glowing skin",
      price: "₹2,500",
      duration: "60 mins",
      image: facialService,
      rating: 5
    },
    {
      title: "Hair Styling",
      description: "Professional hair cut, color, and styling by expert stylists",
      price: "₹1,800",
      duration: "90 mins",
      image: hairService,
      rating: 5
    },
    {
      title: "Bridal Makeup",
      description: "Complete bridal makeover for your special day",
      price: "₹8,000",
      duration: "120 mins",
      image: makeupService,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-luxury-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Glow Beauty?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional treatments and luxurious environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 shadow-luxury group-hover:shadow-glow transition-all duration-300">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Professionals</h3>
              <p className="text-muted-foreground">Certified and experienced beauty experts dedicated to your transformation</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 shadow-luxury group-hover:shadow-glow transition-all duration-300">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-muted-foreground">Only the finest, high-quality products for exceptional results</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-4 shadow-luxury group-hover:shadow-glow transition-all duration-300">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Experience</h3>
              <p className="text-muted-foreground">Relax in our elegant salon designed for your comfort and wellness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular treatments designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="hero" className="shadow-luxury hover:shadow-glow">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your appointment today and experience the luxury of professional beauty care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
