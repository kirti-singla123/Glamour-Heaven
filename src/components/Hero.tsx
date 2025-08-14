import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-start justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golden-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-soft-pink/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Unleash Your{" "}
                <span className="text-transparent bg-gradient-golden bg-clip-text">
                  Inner Glow
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Experience the ultimate in beauty and wellness at our luxury salon. 
                Transform your look and rejuvenate your spirit with our expert treatments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shadow-luxury hover:shadow-glow text-lg px-8 py-6">
                Call for Booking
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
                Our Services
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Expert Services</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-golden rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <img
                src={heroImage}
                alt="Professional beauty treatment"
                className="relative w-full max-w-xl lg:max-w-2xl rounded-full shadow-luxury object-cover"
              />
              
              {/* Floating service cards */}
              <div className="absolute -top-8 -left-8 bg-card p-4 rounded-lg shadow-soft animate-float">
                <div className="text-sm font-medium">Professional Care</div>
                <div className="text-xs text-muted-foreground">Expert Treatments</div>
              </div>
              
              <div className="absolute -bottom-4 -right-8 bg-card p-4 rounded-lg shadow-soft animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-sm font-medium">Premium Quality</div>
                <div className="text-xs text-muted-foreground">Luxury Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
