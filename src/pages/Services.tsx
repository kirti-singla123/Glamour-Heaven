import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom"; // ✅ import Link

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
          rating: 5
        },
        {
          title: "Anti-Aging Facial",
          description: "Advanced treatment to reduce fine lines and wrinkles",
          price: "₹3,500",
          duration: "75 mins",
          image: antiAgingFacialService,
          rating: 5
        },
        {
          title: "Gold Facial",
          description: "Luxurious gold leaf treatment for radiant, glowing skin",
          price: "₹5,000",
          duration: "90 mins",
          image: goldFacialService,
          rating: 5
        }
      ]
    },
    {
      category: "Hair Services",
      services: [
        {
          title: "Hair Cut & Style",
          description: "Professional haircut with wash and styling",
          price: "₹800",
          duration: "60 mins",
          image: hairCutStyleService,
          rating: 5
        },
        {
          title: "Hair Color",
          description: "Full hair coloring with premium products",
          price: "₹2,500",
          duration: "120 mins",
          image: hairColorService,
          rating: 5
        },
        {
          title: "Hair Treatment",
          description: "Deep conditioning and repair treatment",
          price: "₹1,800",
          duration: "90 mins",
          image: hairTreatmentService,
          rating: 5
        }
      ]
    },
    {
      category: "Nail Services",
      services: [
        {
          title: "Basic Manicure",
          description: "Nail shaping, cuticle care, and polish application",
          price: "₹600",
          duration: "45 mins",
          image: basicManicureService,
          rating: 5
        },
        {
          title: "Gel Manicure",
          description: "Long-lasting gel polish with professional finish",
          price: "₹1,200",
          duration: "60 mins",
          image: gelManicureService,
          rating: 5
        },
        {
          title: "Pedicure Deluxe",
          description: "Complete foot care with massage and premium polish",
          price: "₹1,000",
          duration: "75 mins",
          image: pedicureDeluxeService,
          rating: 5
        }
      ]
    },
    {
      category: "Makeup Services",
      services: [
        {
          title: "Party Makeup",
          description: "Glamorous makeup for special occasions",
          price: "₹2,500",
          duration: "90 mins",
          image: partyMakeupService,
          rating: 5
        },
        {
          title: "Bridal Makeup",
          description: "Complete bridal look with hairstyling",
          price: "₹8,000",
          duration: "3 hours",
          image: makeupService,
          rating: 5
        },
        {
          title: "Engagement Makeup",
          description: "Elegant makeup for engagement ceremonies",
          price: "₹4,500",
          duration: "2 hours",
          image: engagementMakeupService,
          rating: 5
        }
      ]
    },
    {
      category: "Threading & Waxing",
      services: [
        {
          title: "Eyebrow Threading",
          description: "Precise eyebrow shaping and threading",
          price: "₹200",
          duration: "20 mins",
          image: eyebrowService,
          rating: 5
        },
        {
          title: "Full Face Threading",
          description: "Complete facial hair removal threading",
          price: "₹500",
          duration: "45 mins",
          image: fullFaceThreadingService,
          rating: 5
        },
        {
          title: "Upper Lip Threading",
          description: "Quick and precise upper lip hair removal",
          price: "₹150",
          duration: "15 mins",
          image: upperLipThreadingService,
          rating: 5
        }
      ]
    },
    {
      category: "Spa Treatments",
      services: [
        {
          title: "Body Massage",
          description: "Relaxing full body massage with aromatic oils",
          price: "₹2,000",
          duration: "60 mins",
          image: bodyMassageService,
          rating: 5
        },
        {
          title: "Hot Stone Massage",
          description: "Therapeutic massage with heated stones",
          price: "₹3,500",
          duration: "90 mins",
          image: hotStoneMassageService,
          rating: 5
        },
        {
          title: "Body Scrub",
          description: "Exfoliating body treatment for smooth skin",
          price: "₹1,800",
          duration: "45 mins",
          image: bodyScrubService,
          rating: 5
        }
      ]
    }
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
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/5"
              onClick={() => window.open('tel:+919876543210')}
            >
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
