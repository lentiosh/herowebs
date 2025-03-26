import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 h-[40rem] w-[40rem] translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-b from-primary/5 to-primary/20 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 translate-y-1/4 rounded-full bg-gradient-to-t from-secondary/10 to-secondary/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 mb-8 text-xs font-medium rounded-full bg-secondary text-foreground/80">
              Your Development Partner
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-6 tracking-tight">
              We build exceptional digital experiences using modern technologies
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Crafting pixel-perfect web applications with ReactJS, NextJS, NodeJS, and more. 
              We bring your ideas to life with the latest frameworks and tools.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={<ArrowRight size={18} />} 
                  iconPosition="right"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
