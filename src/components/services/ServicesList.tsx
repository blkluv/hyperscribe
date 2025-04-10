
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Laptop, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'LinkedIn Ghostwriting',
    description: 'Position yourself as a thought leader and attract qualified leads.',
    details: [
      'Custom posts that match your tone and expertise',
      'Strategic content calendar aligned with your goals',
      'Audience engagement to grow your network',
      'Performance analytics and optimization recommendations',
    ],
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50'
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'SEO Blog Articles',
    description: 'Boost rankings and turn traffic into customers with conversion-focused blog content.',
    details: [
      'In-depth keyword & competitor research',
      '1,500+ word SEO-optimized articles',
      'Smart internal linking & on-page SEO',
      'Regular performance reporting'
    ],
    color: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50'
  },
  {
    icon: <Laptop className="h-8 w-8" />,
    title: 'Website Copywriting',
    description: 'Convert more visitors with persuasive website copy that clearly communicates your value proposition and drives action.',
    details: [
      'Strategic website content audit and strategy',
      'Conversion-focused homepage, product, and landing page copy',
      'UX writing for improved user experience',
      'SEO optimization for key pages',
      'A/B testing recommendations for continuous improvement'
    ],
    color: 'from-teal-500 to-blue-500',
    bgLight: 'bg-teal-50'
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Newsletter Creation',
    description: 'AI-assisted newsletters for SaaS brands to nurture leads, maintain customer engagement, and drive recurring revenue.',
    details: [
      'Weekly or monthly newsletters tailored to your audience',
      'Audience segmentation for personalized messaging',
      'A/B testing subject lines and content formats',
      'Automated workflow setup and management',
      'Detailed analytics and performance optimization'
    ],
    color: 'from-blue-500 to-sky-400',
    bgLight: 'bg-sky-50'
  }
];

const ServicesList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Content Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From thought leadership to lead generation, we offer a full spectrum of content services designed specifically for SaaS companies.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="group"
            >
              <Card className="h-full flex flex-col rounded-xl overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg relative">
                {/* Gradient top border */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`}></div>
                
                <CardHeader className="pb-4 relative">
                  <div className={`mb-5 w-14 h-14 flex items-center justify-center rounded-lg ${service.bgLight} text-blue-600`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4 grow">
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mt-1 mr-3 p-0.5 rounded-full bg-green-100">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-2 pb-6">
                  <a 
                    href="/contact" 
                    className="w-full"
                  >
                    <Button 
                      variant="outline"
                      className="w-full border border-blue-200 hover:bg-blue-50 text-blue-600 hover:text-blue-700 rounded-lg group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <Button 
              className="rounded-full px-8 py-6 shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 group"
            >
              <span>Request Custom Solution</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
