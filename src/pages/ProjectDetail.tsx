/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This would typically come from an API or database
const getProjectData = (id: string) => {
  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce platform built with NextJS and a headless CMS.',
      longDescription: 'This comprehensive e-commerce solution features product listings, shopping cart functionality, secure checkout, user accounts, and an admin dashboard for inventory management. Built with performance and scalability in mind, it leverages modern web technologies to deliver a seamless shopping experience across all devices.',
      imageUrl: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop',
      tags: ['NextJS', 'TailwindCSS', 'Headless CMS'],
      link: 'https://example.com',
      category: 'Web',
      client: 'RetailCo Inc.',
      completedDate: 'March 2023',
      services: ['Web Development', 'UI/UX Design', 'CMS Integration']
    },
    {
      id: '2',
      title: 'Healthcare Dashboard',
      description: 'An intuitive analytics dashboard for healthcare professionals with React and D3.',
      longDescription: 'Developed for healthcare professionals, this analytics dashboard visualizes patient data, treatment outcomes, and facility metrics. The interface prioritizes accessibility and ease of use, allowing medical staff to quickly access critical information and generate comprehensive reports for better decision-making.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js'],
      category: 'Web',
      client: 'MedTech Solutions',
      completedDate: 'July 2023',
      services: ['Data Visualization', 'Frontend Development', 'API Integration']
    },
    {
      id: '3',
      title: 'Real Estate App',
      description: 'A mobile-first real estate application with advanced filtering and mapping.',
      longDescription: 'This real estate platform connects buyers, sellers, and agents through an intuitive interface featuring property listings, advanced search filters, interactive maps, virtual tours, and appointment scheduling. The responsive design ensures a consistent experience across devices while maintaining performance and usability.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
      tags: ['React Native', 'Firebase', 'Maps API'],
      link: 'https://example.com',
      category: 'Mobile',
      client: 'HomeQuest Realty',
      completedDate: 'November 2023',
      services: ['Mobile App Development', 'API Integration', 'UX Design']
    },
    {
      id: '4',
      title: 'Fitness Tracking Platform',
      description: 'A comprehensive fitness tracking platform with workout plans and progress monitoring.',
      longDescription: 'This fitness platform helps users track workouts, set goals, and monitor progress through an engaging and motivational interface. Features include customizable workout plans, nutrition tracking, achievement badges, and social sharing capabilities, all designed to promote consistent exercise habits and healthy lifestyle choices.',
      imageUrl: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=2070&auto=format&fit=crop',
      tags: ['React', 'NodeJS', 'MongoDB'],
      category: 'Web',
      client: 'FitLife Enterprises',
      completedDate: 'January 2024',
      services: ['Full-stack Development', 'Database Design', 'Performance Optimization']
    },
    {
      id: '5',
      title: 'Food Delivery App',
      description: 'A food delivery application with real-time order tracking and payment integration.',
      longDescription: 'This food delivery solution connects local restaurants with hungry customers through a seamless mobile experience. The app features restaurant discovery, menu browsing, order customization, secure payment processing, real-time delivery tracking, and a review system to help users make informed choices about their next meal.',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
      tags: ['React Native', 'Redux', 'Stripe'],
      category: 'Mobile',
      client: 'DeliverEats',
      completedDate: 'October 2023',
      services: ['Mobile Development', 'Payment Integration', 'Location Services']
    },
    {
      id: '6',
      title: 'Learning Management System',
      description: 'A scalable LMS for educational institutions with video streaming and assessment tools.',
      longDescription: 'This learning management system serves educational institutions with tools for course creation, content delivery, student engagement, and performance assessment. The platform supports various media types, interactive assignments, discussion forums, and comprehensive analytics to track learning outcomes and improve educational experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=1170&auto=format&fit=crop',
      tags: ['NextJS', 'GraphQL', 'AWS'],
      category: 'Web',
      client: 'EduTech Academy',
      completedDate: 'April 2023',
      services: ['Web Application Development', 'Cloud Infrastructure', 'Content Management']
    },
  ];
  
  return projects.find(project => project.id === id);
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const projectData = getProjectData(id);
      setProject(projectData);
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 flex justify-center items-center">
        <div className="animate-pulse">Loading project details...</div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/projects" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/projects" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>
        
        <div className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden mb-8">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground">{project.longDescription}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  <Tag size={14} className="inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            {project.link && (
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Visit Project <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            )}
          </div>
          
          <div>
            <div className="glass-card p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Client</h4>
                  <p className="flex items-center">
                    <User size={16} className="mr-2 text-primary" />
                    {project.client}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Completed</h4>
                  <p className="flex items-center">
                    <Calendar size={16} className="mr-2 text-primary" />
                    {project.completedDate}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Services</h4>
                  <ul className="space-y-1">
                    {project.services.map((service: string) => (
                      <li key={service} className="flex items-start">
                        <span className="mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Interested in a similar project?</h3>
              <p className="text-muted-foreground mb-4">
                Contact us to discuss how we can help bring your ideas to life.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-12 border-t">
          <h2 className="text-2xl font-bold mb-8 text-center">Other Projects You Might Like</h2>
          {/* This would typically be a component showing related projects */}
          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
