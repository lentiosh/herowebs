import { useEffect } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Code, Layout, Smartphone, Server, Database, Cloud, Gauge, Search } from 'lucide-react';
import Button from '@/components/Button';
import { Link } from 'react-router';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with ReactJS, NextJS, and other modern frameworks.',
      icon: <Code size={24} />,
      items: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Platforms', 'Content Management Systems']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that focuses on creating intuitive, beautiful, and functional interfaces.',
      icon: <Layout size={24} />,
      items: ['User Interface Design', 'User Experience Design', 'Wireframing & Prototyping', 'Design Systems']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications using React Native and Flutter.',
      icon: <Smartphone size={24} />,
      items: ['iOS Apps', 'Android Apps', 'Cross-platform Development', 'App Store Optimization']
    },
    {
      title: 'Backend Development',
      description: 'Scalable and secure backend systems using NodeJS, Express, and various databases.',
      icon: <Server size={24} />,
      items: ['API Development', 'Authentication & Authorization', 'Microservices', 'Serverless Architecture']
    },
    {
      title: 'Database Solutions',
      description: 'Efficient data storage, retrieval, and management solutions for your applications.',
      icon: <Database size={24} />,
      items: ['SQL Databases', 'NoSQL Databases', 'Database Design', 'Data Migration']
    },
    {
      title: 'Cloud Services',
      description: 'Deployment, hosting, and management of applications on leading cloud platforms.',
      icon: <Cloud size={24} />,
      items: ['AWS', 'Google Cloud', 'Azure', 'Serverless Deployment']
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility and ranking in search engine results.',
      icon: <Search size={24} />,
      items: ['Technical SEO', 'On-page Optimization', 'Content Strategy', 'Performance Optimization']
    },
    {
      title: 'Web Performance',
      description: 'Optimize your web application for speed, accessibility, and overall performance.',
      icon: <Gauge size={24} />,
      items: ['Load Time Optimization', 'Accessibility', 'Core Web Vitals', 'Performance Monitoring']
    }
  ];
  
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
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">What We Offer</h1>
          <p className="text-muted-foreground mb-8 animate-fade-in">
            We provide end-to-end solutions for your digital needs, from design to development and deployment.
            Our expertise spans across various technologies and domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
        
        {/* Process Section */}
        <section className="mt-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-on-scroll">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">How We Work</h2>
            <p className="text-muted-foreground animate-on-scroll">
              Our streamlined process ensures that your project is delivered on time and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'We start by understanding your business goals, target audience, and project requirements.' },
              { number: '02', title: 'Planning', description: 'We create a detailed roadmap outlining the scope, timeline, and deliverables for your project.' },
              { number: '03', title: 'Development', description: 'Our team designs and develops your solution with regular updates and feedback loops.' },
              { number: '04', title: 'Delivery', description: 'We deploy your solution and provide ongoing support and maintenance as needed.' }
            ].map((step) => (
              <div 
                key={step.number} 
                className="glass-card p-8 animate-on-scroll"
              >
                <span className="block text-4xl font-bold text-primary/30 mb-4">{step.number}</span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mt-32 text-center">
          <div className="glass-card p-12 md:p-16 max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our expertise in modern web technologies.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
