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
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tagline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-golden bg-clip-text text-transparent">
            "Your Beauty, Our Passion"
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the art of beauty and self-care at Glamour Heaven.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            We’re Here for You
          </h2>

          {/* Bridal packages message */}
          <div className="text-center mb-10">
            <p className="text-lg text-gray-700 font-medium">
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

          <div className="grid gap-6 sm:grid-cols-2">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-luxury transition-shadow duration-300 rounded-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-golden rounded-full flex items-center justify-center text-primary-foreground shadow-glow">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
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
