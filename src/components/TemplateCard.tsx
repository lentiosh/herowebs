
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface Template {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  category: string;
}

interface TemplateCardProps {
  template: Template;
}

const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift transition-all duration-300 h-full flex flex-col">
      <div className="aspect-[16/9] overflow-hidden bg-secondary/20">
        <img 
          src={template.imageSrc} 
          alt={template.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{template.title}</h3>
          <span className="text-primary font-medium">{template.price}</span>
        </div>
        <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-foreground/80 rounded-full mb-3">
          {template.category}
        </span>
        <p className="text-muted-foreground">{template.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <Link to={`/templates/${template.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
          View details
          <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;
