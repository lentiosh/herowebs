import { useEffect } from 'react';
import Button from '@/components/Button';
import { Link } from 'react-router';
import { Users, Award, MessageSquare, Clock } from 'lucide-react';

const About = () => {
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
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Story</h1>
          <p className="text-muted-foreground animate-fade-in">
            Get to know the team behind the technology and our approach to building exceptional digital experiences.
          </p>
        </div>
        
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="glass-card p-8 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              To be the go-to agency for businesses seeking innovative, high-quality digital solutions that drive growth and deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              We envision a digital landscape where technology serves as an enabler, making businesses more efficient, accessible, and impactful.
            </p>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll animate-delay-100">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To deliver cutting-edge web and mobile solutions that help our clients achieve their business goals through thoughtful design, robust development, and strategic thinking.
            </p>
            <p className="text-muted-foreground">
              We're committed to staying at the forefront of technology while maintaining a focus on usability, accessibility, and performance.
            </p>
          </div>
        </div>
        
        {/* Values Section */}
        <section className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-on-scroll">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">What Drives Us</h2>
            <p className="text-muted-foreground animate-on-scroll">
              Our core values guide everything we do, from how we work with clients to how we build our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Award size={36} />, 
                title: 'Excellence', 
                description: 'We strive for excellence in every project, paying attention to the smallest details to deliver outstanding results.' 
              },
              { 
                icon: <Users size={36} />, 
                title: 'Collaboration', 
                description: 'We believe in the power of teamwork and collaboration, both internally and with our clients.' 
              },
              { 
                icon: <MessageSquare size={36} />, 
                title: 'Transparency', 
                description: 'We maintain open and honest communication throughout the project lifecycle.' 
              },
              { 
                icon: <Clock size={36} />, 
                title: 'Innovation', 
                description: 'We constantly explore new technologies and approaches to solve complex problems.' 
              }
            ].map((value, index) => (
              <div 
                key={value.title} 
                className="glass-card p-8 text-center animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Team Section Placeholder */}
        <section className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-4 animate-on-scroll">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Meet the Experts</h2>
            <p className="text-muted-foreground animate-on-scroll">
              Our team of experienced developers, designers, and strategists are passionate about creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex justify-center mb-16 animate-on-scroll">
            <Users size={80} className="text-muted" />
          </div>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-16">
          <div className="glass-card p-12 md:p-16 max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Our team is here to help you create exceptional digital experiences.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Start a Project
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
