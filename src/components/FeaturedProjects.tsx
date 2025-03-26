
import ProjectCard from './ProjectCard';
import Button from './Button';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

const FeaturedProjects = () => {
  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform built with NextJS and a headless CMS.',
      imageUrl: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop',
      tags: ['NextJS', 'TailwindCSS', 'Headless CMS'],
      link: 'https://example.com',
    },
    {
      id: '2',
      title: 'Healthcare Dashboard',
      description: 'An intuitive analytics dashboard for healthcare professionals with React and D3.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js'],
    },
    {
      id: '3',
      title: 'Real Estate App',
      description: 'A mobile-first real estate application with advanced filtering and mapping.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Maps API'],
      link: 'https://example.com',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Discover some of our best work across various industries and technologies.
            </p>
          </div>
          <Link to="/projects">
            <Button 
              variant="outline" 
              icon={<ArrowRight size={16} />} 
              iconPosition="right"
            >
              View All Projects
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
