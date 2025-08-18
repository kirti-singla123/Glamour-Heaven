import ServiceCard from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom"; // ✅ keep Link import for use in ServiceCard

// Import all service images
import facialService from "@/assets/facial-service.jpg";
import classicFacialService from "@/assets/classic-facial-service.jpg";
import antiAgingFacialService from "@/assets/anti-aging-facial-service.jpg";
import goldFacialService from "@/assets/gold-facial-service.jpg";
import hairService from "@/assets/hair-service.jpg";
import hairCutStyleService from "@/assets/hair-cut-style-service.jpg";
import hairColorService from "@/assets/hair-color-service.jpg";
import hairTreatmentService from "@/assets/hair-treatment-service.jpg";
import basicManicureService from "@/assets/basic-manicure-service.jpg";
import gelManicureService from "@/assets/gel-manicure-service.jpg";
import pedicureDeluxeService from "@/assets/pedicure-deluxe-service.jpg";
import makeupService from "@/assets/makeup-service.jpg";
import partyMakeupService from "@/assets/party-makeup-service.jpg";
import engagementMakeupService from "@/assets/engagement-makeup-service.jpg";
import eyebrowService from "@/assets/eyebrow-service.jpg";
import fullFaceThreadingService from "@/assets/full-face-threading-service.jpg";
import upperLipThreadingService from "@/assets/upper-lip-threading-service.jpg";
import bodyMassageService from "@/assets/body-massage-service.jpg";
import hotStoneMassageService from "@/assets/hot-stone-massage-service.jpg";
import bodyScrubService from "@/assets/body-scrub-service.jpg";

const Services = () => {
  const serviceCategories = [
    {
      category: "Facial Treatments",
      services: [
        {
          title: "Classic Facial",
          description: "Deep cleansing facial with extraction and moisturizing",
          price: "₹1,500",
          duration: "45 mins",
          image: classicFacialService,
          rating: 5,
        },
        {
          title: "Anti-Aging Facial",
          description: "Advanced treatment to reduce fine lines and wrinkles",
          price: "₹3,500",
          duration: "75 mins",
          image: antiAgingFacialService,
          rating: 5,
        },
        {
          title: "Gold Facial",
          description: "Luxurious gold leaf treatment for radiant, glowing skin",
          price: "₹5,000",
          duration: "90 mins",
          image: goldFacialService,
          rating: 5,
        },
      ],
    },
    // ... keep the rest unchanged
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of beauty and wellness treatments
            designed to enhance your natural radiance
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceCategories.map((cat, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
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
                <ServiceCard key={serviceIndex} {...service} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience the
            luxury of professional beauty care
          </p>
          <div className="flex justify-center">
            <button
              className="px-6 py-3 rounded-xl border border-primary/30 hover:bg-primary/5"
              onClick={() => window.open("tel:+919876543210")}
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
