
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ChevronRight, BrainCircuit, Database, FileEdit, CheckCircle, Share2, BarChart3 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const steps = [
  {
    number: '01',
    title: 'Strategy & Analysis',
    description: 'We analyze your audience, competitors, and goals to create a tailored content strategy.',
    icon: <BrainCircuit className="h-6 w-6" />,
    details: [
      'Comprehensive audience analysis',
      'Competitive landscape review',
      'Content gap identification',
      'Goal alignment workshop'
    ]
  },
  {
    number: '02',
    title: 'AI-Powered Research',
    description: 'Our AI tools gather and analyze data to identify content opportunities and optimal topics.',
    icon: <Database className="h-6 w-6" />,
    details: [
      'AI data mining & pattern recognition',
      'Semantic topic clustering',
      'Keyword opportunity identification',
      'Trend analysis & prediction'
    ]
  },
  {
    number: '03',
    title: 'Content Creation',
    description: 'Our expert team creates high-quality content optimized for your specific goals and channels.',
    icon: <FileEdit className="h-6 w-6" />,
    details: [
      'AI-assisted draft generation',
      'Expert human writing & editing',
      'SEO optimization',
      'Multimedia content integration'
    ]
  },
  {
    number: '04',
    title: 'Human Review & Refinement',
    description: 'Content experts review, edit, and refine to ensure quality, accuracy, and brand voice.',
    icon: <CheckCircle className="h-6 w-6" />,
    details: [
      'Quality assurance review',
      'Brand voice consistency check',
      'Fact checking & verification',
      'Content polish & enhancement'
    ]
  },
  {
    number: '05',
    title: 'Publication',
    description: 'We publish your content with the best SEO practices.',
    icon: <Share2 className="h-6 w-6" />,
    details: [
      'Multi-channel distribution',
      'Technical SEO implementation',
      'Metadata optimization',
      'Schema markup integration'
    ]
  },
  {
    number: '06',
    title: 'Analysis & Optimization',
    description: 'Continuous monitoring and data analysis to optimize performance and improve future content.',
    icon: <BarChart3 className="h-6 w-6" />,
    details: [
      'Performance tracking & analytics',
      'User behavior analysis',
      'Conversion rate optimization',
      'Iterative content refinement'
    ]
  }
];

const WorkflowSection = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our AI + Human Workflow
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine the efficiency of AI with the creativity and expertise of humans to deliver exceptional content.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Workflow Steps Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 to-blue-500 hidden sm:block" />
            
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="mb-8 last:mb-0"
              >
                <Collapsible 
                  open={expandedStep === index} 
                  onOpenChange={() => setExpandedStep(expandedStep === index ? null : index)}
                >
                  <CollapsibleTrigger className="w-full">
                    <Card className={`relative border-0 transition-all duration-300 overflow-hidden ${expandedStep === index ? 'shadow-lg scale-[1.02]' : 'shadow-md hover:shadow-lg hover:scale-[1.01]'}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          {/* Timeline dot with number */}
                          <div className="relative mr-4 sm:mr-6 flex-shrink-0">
                            <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 border-2 border-blue-100 z-10 relative">
                              <div className="text-sm sm:text-lg font-bold">{step.number}</div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-1">
                              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                {step.icon}
                              </div>
                              <h3 className="text-xl font-bold">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                          
                          {/* Icon */}
                          <div className="ml-2 flex-shrink-0 transition-transform duration-300" style={{ transform: expandedStep === index ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                            <ChevronRight className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="pl-12 sm:pl-24 mt-2 mb-6 pr-4 ml-[2px]">
                      <Card className="border-0 bg-blue-50/50 shadow-sm">
                        <CardContent className="p-4">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                <span className="text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Statistics section with redesigned cards */}
        <div className="mt-20 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { value: "3x", label: "Faster Production", delay: 0 },
              { value: "87%", label: "Client Satisfaction Rate", delay: 0.1 },
              { value: "+156%", label: "Average Traffic Increase", delay: 0.2 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <Card className="border-0 shadow-md h-full bg-gradient-to-br from-white to-blue-50 overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    <div className="text-4xl md:text-5xl font-bold mb-3 text-gradient bg-gradient-to-r from-blue-600 to-blue-500">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
