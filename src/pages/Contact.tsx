import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  MessageCircle 
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

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
      details: ["info@glowbeauty.com", "appointments@glowbeauty.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"]
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#" },
    { icon: <MessageCircle className="w-5 h-5" />, name: "WhatsApp", url: "https://wa.me/919876543210" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the luxury of professional beauty care? Contact us to book your appointment or ask any questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Interested Service</Label>
                  <Input id="service" placeholder="Which service are you interested in?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements or any questions you have"
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full shadow-luxury hover:shadow-glow">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-luxury transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-primary-foreground shadow-glow">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
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

            {/* Social Media */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>
                  Stay updated with our latest treatments and beauty tips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-golden rounded-full flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start border-primary/30 hover:bg-primary/5"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now for Appointment
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start border-primary/30 hover:bg-primary/5"
                  onClick={() => window.open('https://wa.me/919876543210')}
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <Card className="shadow-luxury">
          <CardHeader>
            <CardTitle className="text-2xl">Find Us</CardTitle>
            <CardDescription>
              Located in the heart of Mumbai's fashion district
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full h-64 bg-gradient-hero rounded-b-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Interactive Map Coming Soon</p>
                <p className="text-sm">123 Beauty Street, Fashion District, Mumbai</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;