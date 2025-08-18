import ServiceCard from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// ✅ All your imports for images remain unchanged...

const Services = () => {
  const serviceCategories = [
    // ... your categories and services (unchanged)
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of beauty and wellness treatments designed to enhance your natural radiance
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceCategories.map((cat, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                {cat.category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-center lg:text-left">
                {category.category}
              </h2>
              <div className="w-24 h-1 bg-gradient-golden mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="flex flex-col gap-4">
                  {/* ✅ Pass Link directly into ServiceCard */}
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Treatment?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience the luxury of professional beauty care
          </p>
          <div className="flex justify-center">
            <button 
              className="border-primary/30 hover:bg-primary/5 px-6 py-3 rounded-lg"
              onClick={() => window.open('tel:+919876543210')}
            >
              Call Now: +91 98765 43210
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
