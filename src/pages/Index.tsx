import { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import { Code, Layout, Smartphone, Server, Users, Zap, ChevronRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { Link } from 'react-router';
import TemplateCard from '@/components/TemplateCard';

const Index = () => {
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

  const services = [
    {
      title: 'Web Development',
      description: 'We build modern, responsive web applications using React, NextJS, and other cutting-edge frameworks.',
      icon: <Code size={24} />
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on creating intuitive, beautiful, and functional interfaces.',
      icon: <Layout size={24} />
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications using React Native and Flutter.',
      icon: <Smartphone size={24} />
    },
    {
      title: 'Backend Development',
      description: 'Scalable and secure backend systems using NodeJS, Express, and various databases.',
      icon: <Server size={24} />
    }
  ];

  const templates = [
    {
      id: 1,
      title: 'E-commerce Starter',
      description: 'A complete e-commerce solution with product listing, cart, and checkout functionality.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=E-commerce+Template',
      price: '$129',
      category: 'E-commerce'
    },
    {
      id: 2,
      title: 'Portfolio Pro',
      description: 'Showcase your work with this elegant portfolio template designed for creative professionals.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Portfolio+Template',
      price: '$79',
      category: 'Portfolio'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'A feature-rich dashboard template for SaaS applications with analytics and user management.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=SaaS+Dashboard',
      price: '$149',
      category: 'Dashboard'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-on-scroll">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              We provide end-to-end solutions for your digital needs, from design to development and deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services">
              <Button variant="outline">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturedProjects />
      
      {/* Templates Section */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-on-scroll">
              Templates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Find Your Template</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Jumpstart your app development process with pre-built solutions from herowebs.com and our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/templates">
              <Button 
                variant="primary" 
                icon={<ChevronRight size={18} />} 
                iconPosition="right"
              >
                Explore More Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-on-scroll">
              Technologies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Tech Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              We use the latest technologies and frameworks to build fast, scalable, and maintainable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 animate-on-scroll">
            {['React', 'NextJS', 'NodeJS', 'TypeScript', 'TailwindCSS', 'Firebase', 'MongoDB', 'AWS', 'GraphQL', 'Redux', 'React Native', 'Express'].map((tech, index) => (
              <div 
                key={tech} 
                className={`glass-card p-4 text-center hover-lift animate-on-scroll animate-delay-${index % 6 * 100}`}
              >
                <span className="block font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Ready to bring your idea to life?</h2>
            <p className="text-primary-foreground/80 mb-10 animate-on-scroll">
              Let's collaborate to create something amazing together. Whether you need a website, mobile app, or complete digital solution, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-on-scroll">
              <Link to="/contact">
                <Button 
                  className="bg-white text-primary hover:bg-white/90"
                  size="lg" 
                  icon={<Zap size={18} />} 
                  iconPosition="left"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  className="border-white/20 text-white hover:bg-white/10" 
                  variant="outline" 
                  size="lg"
                >
                  See Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials/Team Section Placeholder */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-on-scroll">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Driven by Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Meet our team of experienced developers, designers, and strategists.
            </p>
          </div>
          
          <div className="flex justify-center animate-on-scroll">
            <Users size={80} className="text-muted" />
          </div>
          
          <div className="mt-10 text-center animate-on-scroll">
            <Link to="/about">
              <Button variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
