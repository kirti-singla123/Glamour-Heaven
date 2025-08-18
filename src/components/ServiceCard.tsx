import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  rating?: number;
}

const ServiceCard = ({ title, description, price, duration, image, rating = 5 }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-luxury transition-all duration-300 hover:scale-105 bg-card border-border/50 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 fill-golden-accent text-golden-accent" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{price}</div>
            <div className="text-xs text-muted-foreground">Starting from</div>
          </div>
        </div>

        <Link to={`/book/${service.title}`}>
  <Button className="w-full shadow-soft hover:shadow-glow transition-all duration-300">
    Book This Service
  </Button>
</Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
