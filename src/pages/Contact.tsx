import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Camera
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Queen Street West", "Brampton, Ontario L6X 0A1", "Canada"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 905-123-4567", "+1 905-123-4568"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["glamourheaven.netlify.app", "glamourhaven.salon@gmail.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"]
    }
  ];

  const address = contactInfo[0];

  return (
    <div className="min-h-screen pt-4 pb-10 sm:pt-6 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight bg-gradient-golden bg-clip-text text-transparent">
            "Your Beauty, Our Passion"
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Experience the art of beauty and self-care at Glamour Heaven.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-center text-gray-800 tracking-tight">
            We’re Here for You
          </h2>
          <div className="w-20 h-1 bg-gradient-golden rounded-full mx-auto mb-6 sm:mb-8" />

          {/* Bridal packages message */}
          <div className="mb-8 sm:mb-10 px-2">
            <div className="max-w-2xl mx-auto text-center bg-white border border-golden-accent/20 rounded-2xl shadow-soft px-6 py-5 sm:px-8 sm:py-6">
              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
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
          </div>

          {/* Picture section + contact details */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-5 lg:gap-10 mb-10 sm:mb-12 lg:items-stretch">
            {/* Picture placeholder card with golden frame accent */}
            <div className="lg:col-span-2">
              <div className="relative flex flex-col items-center justify-center gap-3 h-full min-h-[240px] sm:min-h-[300px] lg:min-h-full p-6 rounded-2xl bg-gradient-luxury border-2 border-golden-accent/40 shadow-glow overflow-hidden">
                <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-golden-accent rounded-tl-md" />
                <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-golden-accent rounded-tr-md" />
                <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-golden-accent rounded-bl-md" />
                <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-golden-accent rounded-br-md" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-golden rounded-full flex items-center justify-center shadow-glow">
                  <Camera className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-600 tracking-wide uppercase">
                  Photo Placeholder
                </p>
              </div>
            </div>

            {/* Responsive grid */}
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:col-span-3">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border border-golden-accent/15 shadow-soft hover:shadow-luxury rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-golden scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4 sm:space-x-5">
                      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-golden rounded-full flex items-center justify-center text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-gray-800 tracking-wide">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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

          {/* Decorative "Find Us" panel */}
          <div className="relative overflow-hidden rounded-3xl border border-golden-accent/20 shadow-luxury bg-gradient-luxury">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--golden-accent))_1px,transparent_0)] bg-[length:24px_24px]" />
            <div className="relative flex flex-col items-center justify-center text-center px-6 py-14 sm:py-20">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-golden rounded-full flex items-center justify-center shadow-glow animate-float mb-6">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-golden-accent" />
                <span className="uppercase text-xs sm:text-sm tracking-[0.2em] text-golden-accent font-semibold">
                  Find Us
                </span>
                <Sparkles className="w-4 h-4 text-golden-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 tracking-tight">
                {address.details[0]}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {address.details[1]}, {address.details[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
