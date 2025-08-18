import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ✅ Your images imports go here
// import hairImage from "...";
// import makeupImage from "...";
// etc.

const Services = () => {
  const serviceCategories = [
    {
      category: "Hair Care",
      services: [
        {
          title: "Haircut & Styling",
          description: "Professional haircut with blow-dry and styling",
          price: "₹800",
          duration: "45 min",
          image: "/images/haircut.jpg",
        },
        {
          title: "Hair Coloring",
          description: "Full hair coloring with premium products",
          price: "₹2500",
          duration: "2 hr",
          image: "/images/haircolor.jpg",
        },
      ],
    },
    {
      category: "Skin Care",
      services: [
        {
          title: "Facial Treatment",
          description: "Rejuvenating facial with premium skincare products",
          price: "₹1500",
          duration: "1 hr",
          image: "/images/facial.jpg",
        },
        {
          title: "Clean-up",
          description: "Deep cleansing and exfoliation",
          price: "₹700",
          duration: "30 min",
          image: "/images/cleanup.jpg",
        },
      ],
    },
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
                <Card
                  key={serviceIndex}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{service.duration}</span>
                      <span>{service.price}</span>
                    </div>
                    {/* ✅ Single button inside card */}
                    <Link to={`/book/${encodeURIComponent(service.title)}`}>
                      <Button className="w-full">Book My Service</Button>
                    </Link>
                  </CardContent>
                </Card>
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
              className="border-primary/30 hover:bg-primary/5 px-6 py-3 rounded-lg"
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
