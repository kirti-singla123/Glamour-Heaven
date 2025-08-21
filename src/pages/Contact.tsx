import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Beauty Street", "Fashion District, Mumbai", "Maharashtra 400001"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["glamourheaven.com", "appointments@glamourheaven.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-golden bg-clip-text text-transparent">
            "Your Beauty, Our Passion"
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the art of beauty and self-care at Glamour Heaven.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
            We’re Here for You
          </h2>

          {/* Bridal packages message */}
          <div className="text-center mb-8 sm:mb-10 px-2">
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              💍 Planning your big day? Ask us about our{" "}
              <span className="bg-gradient-golden bg-clip-text text-transparent font-semibold">
                exclusive bridal packages
              </span>{" "}
              and{" "}
              <span className="bg-gradient-golden bg-clip-text text-transparent font-semibold">
                special discounts
              </span>{" "}
              just for you!
            </p>
          </div>

          {/* Responsive grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-luxury transition-shadow duration-300 rounded-xl"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-golden rounded-full flex items-center justify-center text-primary-foreground shadow-glow">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-800">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm sm:text-base text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
