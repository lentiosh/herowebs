
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index = 0,
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-8 hover-lift flex flex-col",
        `animate-slide-up animate-delay-${index * 100}`
      )}
    >
      <div className="mb-6 p-3 bg-secondary rounded-lg w-fit">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
