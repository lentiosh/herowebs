
import { useState } from 'react';
import TemplateCard from '@/components/TemplateCard';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

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
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blog platform with a clean design, content management, and commenting system.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+Template',
      price: '$99',
      category: 'Blog'
    },
    {
      id: 5,
      title: 'Real Estate Listings',
      description: 'A complete template for real estate websites with property listings, search, and inquiry forms.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Real+Estate+Template',
      price: '$159',
      category: 'Real Estate'
    },
    {
      id: 6,
      title: 'Learning Management',
      description: 'An education platform template with course management, enrollment, and progress tracking.',
      imageSrc: 'https://placehold.co/600x400/e2e8f0/1e293b?text=LMS+Template',
      price: '$179',
      category: 'Education'
    }
  ];

  const categories = ['All', ...new Set(templates.map(template => template.category))];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || template.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-fade-in">
            Templates Marketplace
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready-to-Use Templates</h1>
          <p className="text-muted-foreground mb-8 animate-fade-in">
            Accelerate your development process with our professionally designed and fully functional templates. 
            Each template is built with modern technologies and follows best practices.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="max-w-5xl mx-auto mb-12 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter size={18} className="text-muted-foreground" />
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">No templates found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Custom Template CTA */}
        <div className="mt-24 glass-card p-12 animate-on-scroll">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a Custom Template?</h2>
            <p className="text-muted-foreground mb-8">
              Don't see what you're looking for? We can build a custom template tailored to your specific requirements.
            </p>
            <Button variant="default" size="lg">
              Request Custom Template
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
