import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { servicePlaceholder } from "@/lib/servicePlaceholder";

// Import all service images
import fruitFacialService from "@/assets/fruit-facial-salon.png";
import classicFacialService from "@/assets/classic-facial-service.jpg";
import antiAgingFacialService from "@/assets/anti-aging-facial-service.jpg";
import goldFacialService from "@/assets/gold-facial-service.jpg";
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
  const [activeFilter, setActiveFilter] = useState("All");
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
        },
        {
          title: "Fruit Facial",
          description: "Refreshing facial using natural fruit extracts for glowing skin",
          price: "₹1,200",
          duration: "45 mins",
          image: fruitFacialService,
          rating: 5
        },
        {
          title: "Hydrafacial",
          description: "Advanced hydra-dermabrasion treatment for deep hydration and clarity",
          price: "₹4,500",
          duration: "60 mins",
          image: servicePlaceholder("Hydrafacial", 1),
          rating: 5
        },
        {
          title: "Brightening Facial",
          description: "Skin brightening treatment to even tone and restore radiance",
          price: "₹2,000",
          duration: "50 mins",
          image: servicePlaceholder("Brightening Facial", 2),
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
        },
        {
          title: "Hair Spa",
          description: "Nourishing hair spa treatment for smooth, healthy hair",
          price: "₹1,500",
          duration: "60 mins",
          image: servicePlaceholder("Hair Spa", 3),
          rating: 5
        },
        {
          title: "Keratin Treatment",
          description: "Smoothing keratin treatment for frizz-free, silky hair",
          price: "₹5,000",
          duration: "120 mins",
          image: servicePlaceholder("Keratin Treatment", 0),
          rating: 5
        },
        {
          title: "Hair Coloring",
          description: "Vibrant full hair coloring with long-lasting shine",
          price: "₹3,000",
          duration: "90 mins",
          image: servicePlaceholder("Hair Coloring", 1),
          rating: 5
        },
        {
          title: "Highlights",
          description: "Dimensional hair highlights for a sun-kissed look",
          price: "₹4,000",
          duration: "120 mins",
          image: servicePlaceholder("Highlights", 2),
          rating: 5
        },
        {
          title: "Hair Straightening",
          description: "Long-lasting straightening treatment for sleek, smooth hair",
          price: "₹4,500",
          duration: "150 mins",
          image: servicePlaceholder("Hair Straightening", 3),
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
        },
        {
          title: "Luxury Gel Manicure",
          description: "Chip-resistant gel polish manicure with a glossy finish",
          price: "₹1,200",
          duration: "45 mins",
          image: servicePlaceholder("Luxury Gel Manicure", 0),
          rating: 5
        },
        {
          title: "Gel Pedicure",
          description: "Long-lasting gel polish pedicure with soothing foot pampering",
          price: "₹1,500",
          duration: "60 mins",
          image: servicePlaceholder("Gel Pedicure", 1),
          rating: 5
        },
        {
          title: "Nail Art",
          description: "Creative custom nail art designs for a unique look",
          price: "₹800",
          duration: "30 mins",
          image: servicePlaceholder("Nail Art", 2),
          rating: 5
        },
        {
          title: "Nail Extensions",
          description: "Durable nail extensions for added length and strength",
          price: "₹2,000",
          duration: "90 mins",
          image: servicePlaceholder("Nail Extensions", 3),
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
        },
        {
          title: "Premium Party Makeup",
          description: "Glamorous party makeup look for celebrations and nights out",
          price: "₹3,000",
          duration: "60 mins",
          image: servicePlaceholder("Premium Party Makeup", 0),
          rating: 5
        },
        {
          title: "Elite Engagement Makeup",
          description: "Elegant engagement day makeup for a flawless look",
          price: "₹6,000",
          duration: "90 mins",
          image: servicePlaceholder("Elite Engagement Makeup", 1),
          rating: 5
        },
        {
          title: "Premium Bridal Makeup",
          description: "Stunning bridal makeup for your special day",
          price: "₹15,000",
          duration: "180 mins",
          image: servicePlaceholder("Premium Bridal Makeup", 2),
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
        },
        {
          title: "Full Face Waxing",
          description: "Smooth, hair-free skin with gentle full face waxing",
          price: "₹400",
          duration: "30 mins",
          image: servicePlaceholder("Full Face Waxing", 3),
          rating: 5
        },
        {
          title: "Full Arms Waxing",
          description: "Complete arm waxing for silky smooth skin",
          price: "₹600",
          duration: "45 mins",
          image: servicePlaceholder("Full Arms Waxing", 0),
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
        },
        {
          title: "Deep Tissue Body Massage",
          description: "Rejuvenating full body massage for deep relaxation",
          price: "₹2,500",
          duration: "60 mins",
          image: servicePlaceholder("Deep Tissue Body Massage", 1),
          rating: 5
        }
      ]
    }
  ];

  const filteredCategories =
    activeFilter === "All"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.category === activeFilter);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Discover our comprehensive range of beauty and wellness treatments designed to enhance your natural radiance
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveFilter("All")}
              className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                activeFilter === "All"
                  ? "bg-[#C4923A] border-[#C4923A] text-white"
                  : "bg-secondary border-transparent text-secondary-foreground hover:border-[#C4923A]/50"
              }`}
            >
              All
            </button>
            {serviceCategories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(cat.category)}
                className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                  activeFilter === cat.category
                    ? "bg-[#C4923A] border-[#C4923A] text-white"
                    : "bg-secondary border-transparent text-secondary-foreground hover:border-[#C4923A]/50"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {category.category}
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-golden mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="flex flex-col gap-4">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-6 sm:p-10 lg:p-12 text-center mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience the luxury of professional beauty care
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-sm sm:text-base border-primary/30 hover:bg-primary/5"
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
