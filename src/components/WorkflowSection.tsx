
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Check, ChevronRight, ArrowRight } from 'lucide-react';
import { steps } from '@/data/workflow-steps';

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

const WorkflowSection = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  // Reorganized original steps data
  const workflowSteps = [
    {
      id: 1,
      title: 'Strategy & Analysis',
      subtitle: 'The Foundation',
      icon: '01',
      description: 'We analyze your audience, competitors, and goals to create a tailored content strategy.',
      details: [
        'Comprehensive audience analysis',
        'Competitive landscape review',
        'Content gap identification',
        'Goal alignment workshop'
      ]
    },
    {
      id: 2,
      title: 'AI-Powered Research',
      subtitle: 'Data Intelligence',
      icon: '02',
      description: 'Our AI tools gather and analyze data to identify content opportunities and optimal topics.',
      details: [
        'AI data mining & pattern recognition',
        'Semantic topic clustering',
        'Keyword opportunity identification',
        'Trend analysis & prediction'
      ]
    },
    {
      id: 3,
      title: 'Content Creation',
      subtitle: 'Crafting Quality',
      icon: '03',
      description: 'Our expert team creates high-quality content optimized for your specific goals and channels.',
      details: [
        'AI-assisted draft generation',
        'Expert human writing & editing',
        'SEO optimization',
        'Multimedia content integration'
      ]
    },
    {
      id: 4,
      title: 'Human Review & Refinement',
      subtitle: 'Quality Assurance',
      icon: '04',
      description: 'Content experts review, edit, and refine to ensure quality, accuracy, and brand voice.',
      details: [
        'Quality assurance review',
        'Brand voice consistency check',
        'Fact checking & verification',
        'Content polish & enhancement'
      ]
    },
    {
      id: 5,
      title: 'Publication & Distribution',
      subtitle: 'Going Live',
      icon: '05',
      description: 'We publish your content with the best SEO practices and distribution channels.',
      details: [
        'Multi-channel distribution',
        'Technical SEO implementation',
        'Metadata optimization',
        'Schema markup integration'
      ]
    },
    {
      id: 6,
      title: 'Analysis & Optimization',
      subtitle: 'Continuous Improvement',
      icon: '06',
      description: 'Continuous monitoring and data analysis to optimize performance and improve future content.',
      details: [
        'Performance tracking & analytics',
        'User behavior analysis',
        'Conversion rate optimization',
        'Iterative content refinement'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-5 py-1.5 px-4 bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100">
            HOW IT WORKS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our AI + Human Workflow
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine the efficiency of AI with the creativity and expertise of humans to deliver exceptional content.
          </p>
        </div>

        {/* Workflow Process - Modern Version */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="h-full cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-slate-100 relative">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl transform rotate-12">
                        {step.icon}
                      </div>
                      
                      <CardContent className="p-6 pt-8">
                        <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                        <p className="text-blue-600 text-sm font-medium mb-3">{step.subtitle}</p>
                        <p className="text-muted-foreground">{step.description}</p>
                        
                        <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
                          <span>Learn more</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <span className="bg-blue-50 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                          {step.icon}
                        </span>
                        {step.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <Separator className="my-2" />
                    
                    <div className="mt-2">
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <h4 className="font-semibold mb-3">What we do:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="rounded-full bg-blue-50 p-1 mt-0.5">
                              <Check className="h-3 w-3 text-blue-600" />
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Process Navigation */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="bg-blue-50/50 rounded-xl p-8 border border-blue-100/50">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="text-blue-600 font-medium">Start your journey:</span>
              {workflowSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <Button 
                    onClick={() => setSelectedStep(index)}
                    variant={selectedStep === index ? "default" : "outline"}
                    className={selectedStep === index ? "bg-blue-600" : "border-blue-200 hover:border-blue-300"}
                    size="sm"
                  >
                    {step.title}
                  </Button>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-blue-300" />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {selectedStep !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-white p-6 rounded-lg border border-blue-100/50"
              >
                <h4 className="font-bold text-lg mb-2">{workflowSteps[selectedStep].title}</h4>
                <p className="text-muted-foreground mb-4">{workflowSteps[selectedStep].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {workflowSteps[selectedStep].details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="rounded-full bg-blue-50 p-1 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Statistics section with redesigned cards */}
        <div className="mt-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { value: "3x", label: "Faster Production", detail: "Compared to traditional methods" },
              { value: "87%", label: "Client Satisfaction Rate", detail: "Based on post-project surveys" },
              { value: "+156%", label: "Average Traffic Increase", detail: "Within 6 months of implementation" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden border-0 shadow-md h-full bg-white relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
                      <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{stat.label}</h4>
                    <p className="text-muted-foreground text-sm">{stat.detail}</p>
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
