import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  tags,
  link,
  index = 0,
}) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden hover-lift",
        `animate-slide-up animate-delay-${index * 100}`
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/projects/${id}`} 
            className="text-sm font-medium text-primary hover:underline"
          >
            View details
          </Link>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Visit</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
