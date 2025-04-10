
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We begin with a deep dive into your business, audience, and goals to create a tailored content strategy that aligns with your objectives.',
    details: [
      'Comprehensive business analysis',
      'Competitor content research',
      'Target audience profiling',
      'Content gap analysis',
      'Strategic content planning'
    ]
  },
  {
    number: '02',
    title: 'AI-Enhanced Creation',
    description: 'Our team leverages advanced AI tools to produce first drafts, which are then refined by expert human writers to ensure quality and brand voice consistency.',
    details: [
      'AI-generated content foundation',
      'Human expert refinement',
      'Brand voice calibration',
      'Industry-specific knowledge integration',
      'Fact-checking and verification'
    ]
  },
  {
    number: '03',
    title: 'Review & Optimization',
    description: 'We collaborate with you to review content, implement feedback, and optimize for performance across all intended distribution channels.',
    details: [
      'Collaborative review process',
      'Feedback integration',
      'SEO optimization',
      'Channel-specific formatting',
      'Conversion optimization'
    ]
  },
  {
    number: '04',
    title: 'Publish & Measure',
    description: 'After publishing, we track performance metrics and provide detailed analytics to continuously improve your content strategy and ROI.',
    details: [
      'Publishing support',
      'Performance tracking',
      'Engagement analytics',
      'Conversion reporting',
      'Continuous strategy refinement'
    ]
  }
];

const ServiceProcess = () => {
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
            Our AI + Human Workflow
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple Process, Expert Minds
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/3">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="text-5xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="bg-white p-6 rounded-xl shadow-md h-full">
                  <h4 className="text-xl font-semibold mb-4">What's included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;
