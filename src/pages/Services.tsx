import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  rating: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  duration,
  image,
  rating,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-semibold">{price}</span>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/book/${encodeURIComponent(title)}`} className="w-full">
          <Button className="w-full">Book My Service</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
