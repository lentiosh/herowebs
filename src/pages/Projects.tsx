/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform built with NextJS and a headless CMS.',
      imageUrl: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop',
      tags: ['NextJS', 'TailwindCSS', 'Headless CMS'],
      link: 'https://example.com',
      category: 'Web'
    },
    {
      id: '2',
      title: 'Healthcare Dashboard',
      description: 'An intuitive analytics dashboard for healthcare professionals with React and D3.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js'],
      category: 'Web'
    },
    {
      id: '3',
      title: 'Real Estate App',
      description: 'A mobile-first real estate application with advanced filtering and mapping.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Maps API'],
      link: 'https://example.com',
      category: 'Mobile'
    },
    {
      id: '4',
      title: 'Fitness Tracking Platform',
      description: 'A comprehensive fitness tracking platform with workout plans and progress monitoring.',
      imageUrl: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'NodeJS', 'MongoDB'],
      category: 'Web'
    },
    {
      id: '5',
      title: 'Food Delivery App',
      description: 'A food delivery application with real-time order tracking and payment integration.',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
      tags: ['React Native', 'Redux', 'Stripe'],
      category: 'Mobile'
    },
    {
      id: '6',
      title: 'Learning Management System',
      description: 'A scalable LMS for educational institutions with video streaming and assessment tools.',
      imageUrl: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1170&auto=format&fit=crop',
      tags: ['NextJS', 'GraphQL', 'AWS'],
      category: 'Web'
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  const categories = ['All', 'Web', 'Mobile', 'Design'];
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-fade-in">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Latest Projects</h1>
          <p className="text-muted-foreground mb-8 animate-fade-in">
            Browse through our showcase of web, mobile, and design projects 
            that demonstrate our expertise and commitment to excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeFilter === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="min-w-24"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
