import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: [
        "123 Beauty Street",
        "Fashion District, Mumbai",
        "Maharashtra 400001",
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["contact@glamourheaven.com", "appointments@glamourheaven.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#" },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      name: "WhatsApp",
      url: "https://wa.me/919876543210",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the luxury of professional beauty care? Contact
            us to book your appointment or ask any questions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-luxury transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {info.title}
                      </h3>
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

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-pink-500 transition"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
