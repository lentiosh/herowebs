/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, CheckCircle, DownloadCloud, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const getTemplateData = (id: string) => {
  const templates = [
    {
      id: '1',
      title: 'E-commerce Starter',
      description: 'A complete e-commerce solution with product listing, cart, and checkout functionality.',
      longDescription: 'Kickstart your online store with this comprehensive e-commerce template, featuring everything you need to start selling products online. This template includes product catalog management, shopping cart functionality, secure checkout process, customer account management, and order tracking.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=E-commerce+Template',
      price: '$129',
      category: 'E-commerce',
      features: [
        'Responsive product catalog',
        'Shopping cart with persistent storage',
        'Secure checkout process',
        'User account management',
        'Order history and tracking',
        'Admin dashboard for inventory management',
        'SEO optimized structure',
        'Mobile-first design'
      ],
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe API', 'JWT Authentication'],
      demoUrl: 'https://example.com/demo/ecommerce',
      lastUpdated: 'June 15, 2023'
    },
    {
      id: '2',
      title: 'Portfolio Pro',
      description: 'Showcase your work with this elegant portfolio template designed for creative professionals.',
      longDescription: 'Present your creative work in a professional and captivating way with this portfolio template. Ideal for designers, photographers, artists, and other creative professionals who want to showcase their projects with style. The template features a clean, minimalist design that puts the focus on your work.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Portfolio+Template',
      price: '$79',
      category: 'Portfolio',
      features: [
        'Project showcase with filtering options',
        'About me section with timeline',
        'Contact form with validation',
        'Blog section for sharing insights',
        'Testimonials carousel',
        'Skills and services display',
        'Dark/light mode toggle',
        'Optimized for performance'
      ],
      technologies: ['Next.js', 'Framer Motion', 'TailwindCSS', 'SendGrid', 'Markdown'],
      demoUrl: 'https://example.com/demo/portfolio',
      lastUpdated: 'August 22, 2023'
    },
    {
      id: '3',
      title: 'SaaS Dashboard',
      description: 'A feature-rich dashboard template for SaaS applications with analytics and user management.',
      longDescription: 'Power your SaaS application with this comprehensive dashboard template. Built with scalability and user experience in mind, this template provides everything you need to manage your SaaS platform, from user authentication to detailed analytics and subscription management.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=SaaS+Dashboard',
      price: '$149',
      category: 'Dashboard',
      features: [
        'User authentication and authorization',
        'Role-based access control',
        'Interactive analytics dashboard',
        'Subscription management',
        'User management interface',
        'Notification system',
        'Settings and profile management',
        'API documentation integration'
      ],
      technologies: ['React', 'TypeScript', 'AWS Amplify', 'Chart.js', 'Stripe Subscriptions'],
      demoUrl: 'https://example.com/demo/saas',
      lastUpdated: 'April 10, 2023'
    },
    {
      id: '4',
      title: 'Blog Platform',
      description: 'A modern blog platform with a clean design, content management, and commenting system.',
      longDescription: 'Launch your blog or content site with this modern, feature-rich blog platform template. Designed for content creators, writers, and publishers who need a robust system to manage articles, engage with readers, and grow their audience through SEO-optimized content.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+Template',
      price: '$99',
      category: 'Blog',
      features: [
        'Content management system',
        'Tag and category organization',
        'Comment and moderation system',
        'Author profiles and management',
        'SEO optimization tools',
        'Newsletter subscription',
        'Social media integration',
        'Reading time estimation'
      ],
      technologies: ['Gatsby.js', 'MDX', 'Firebase', 'Algolia Search', 'Mailchimp API'],
      demoUrl: 'https://example.com/demo/blog',
      lastUpdated: 'September 5, 2023'
    },
    {
      id: '5',
      title: 'Real Estate Listings',
      description: 'A complete template for real estate websites with property listings, search, and inquiry forms.',
      longDescription: 'Create a comprehensive real estate website with this template designed for property listings, agent profiles, and customer inquiries. Perfect for real estate agencies, brokers, or individual agents looking to showcase properties and connect with potential buyers or renters.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Real+Estate+Template',
      price: '$159',
      category: 'Real Estate',
      features: [
        'Property listing management',
        'Advanced search and filtering',
        'Interactive maps integration',
        'Agent profiles and listings',
        'Property inquiry forms',
        'Mortgage calculator',
        'Favoriting and saved searches',
        'Virtual tour integration'
      ],
      technologies: ['Next.js', 'MongoDB', 'Google Maps API', 'Cloudinary', 'Twilio SMS'],
      demoUrl: 'https://example.com/demo/realestate',
      lastUpdated: 'July 18, 2023'
    },
    {
      id: '6',
      title: 'Learning Management',
      description: 'An education platform template with course management, enrollment, and progress tracking.',
      longDescription: 'Build an educational platform with this comprehensive learning management system template. Ideal for online courses, training programs, schools, or corporate learning environments, this template includes all the features needed to create, deliver, and track educational content.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=LMS+Template',
      price: '$179',
      category: 'Education',
      features: [
        'Course creation and management',
        'Lesson and module organization',
        'Student enrollment and progress tracking',
        'Quiz and assessment tools',
        'Certificate generation',
        'Discussion forums',
        'Instructor dashboards',
        'Payment integration for course sales'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'WebRTC', 'Stripe'],
      demoUrl: 'https://example.com/demo/lms',
      lastUpdated: 'May 30, 2023'
    }
  ];
  
  return templates.find(template => template.id === id);
};

const TemplateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [template, setTemplate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const templateData = getTemplateData(id);
      setTemplate(templateData);
      setLoading(false);
    }
  }, [id]);
  
  const handleAddToCart = () => {
    console.log(`${template.title} has been added to your cart.`)
  };
  
  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 flex justify-center items-center">
        <div className="animate-pulse">Loading template details...</div>
      </div>
    );
  }
  
  if (!template) {
    return (
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/templates" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Templates
          </Link>
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Template Not Found</h1>
            <p className="text-muted-foreground mb-8">The template you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/templates">View All Templates</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/templates" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Templates
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4">
                {template.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{template.title}</h1>
              <p className="text-lg text-muted-foreground">{template.description}</p>
            </div>
            
            <div className="aspect-video bg-secondary/20 rounded-lg overflow-hidden mb-8">
              <img 
                src={template.imageSrc} 
                alt={template.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="tech">Tech Stack</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 mt-4">
                <div className="prose max-w-none">
                  <p className="text-lg">{template.longDescription}</p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Last updated: {template.lastUpdated}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="features" className="p-4 mt-4">
                <ul className="space-y-2">
                  {template.features.map((feature: string) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle size={18} className="text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="tech" className="p-4 mt-4">
                <div>
                  <h3 className="text-lg font-medium mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {template.technologies.map((tech: string) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <div className="glass-card p-6 mb-6 sticky top-32">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{template.price}</h3>
                <span className="text-sm text-muted-foreground">One-time payment</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <Button className="w-full" onClick={handleAddToCart}>
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                    <DownloadCloud size={18} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="mb-4">Purchase includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary shrink-0 mr-2 mt-0.5" />
                    <span>Full source code</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary shrink-0 mr-2 mt-0.5" />
                    <span>6 months of updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary shrink-0 mr-2 mt-0.5" />
                    <span>Documentation and setup guide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-primary shrink-0 mr-2 mt-0.5" />
                    <span>30 days technical support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-12 border-t">
          <h2 className="text-2xl font-bold mb-8 text-center">You Might Also Like</h2>
          {/* This would typically be a component showing related templates */}
          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/templates">View All Templates</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail;
