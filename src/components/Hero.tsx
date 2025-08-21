import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-start justify-center bg-gradient-hero overflow-hidden pt-16 sm:pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-golden-accent/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-28 sm:w-40 h-28 sm:h-40 bg-soft-pink/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Unleash Your{" "}
                <span className="text-transparent bg-gradient-golden bg-clip-text">
                  Inner Glow
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Experience the ultimate in beauty and wellness at our luxury
                salon. Transform your look and rejuvenate your spirit with our
                expert treatments.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shadow-luxury hover:shadow-glow text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                Call for Booking
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-primary/30 hover:bg-primary/5"
                onClick={() => navigate("/services")}
              >
                Our Services
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Expert Services</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in mt-8 lg:mt-0"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-golden rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <img
                src={heroImage}
                alt="Professional beauty treatment"
                className="relative w-full rounded-full shadow-luxury object-cover"
              />

              {/* Floating service cards */}
              <div className="absolute -top-6 sm:-top-8 -left-4 sm:-left-8 bg-card p-3 sm:p-4 rounded-lg shadow-soft animate-float">
                <div className="text-xs sm:text-sm font-medium">Professional Care</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Expert Treatments</div>
              </div>

              <div
                className="absolute -bottom-3 sm:-bottom-4 -right-4 sm:-right-8 bg-card p-3 sm:p-4 rounded-lg shadow-soft animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-xs sm:text-sm font-medium">Premium Quality</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Luxury Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
