
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for early-stage startups looking to establish their content foundation.',
    monthlyPrice: '$1,500',
    yearlyPrice: '$1,200',
    features: [
      '2 LinkedIn posts per week',
      '2 Blog articles per month',
      'Basic SEO optimization',
      'Monthly performance report',
      'Email support'
    ],
    highlighted: false
  },
  {
    name: 'Growth',
    description: 'Ideal for scaling startups ready to accelerate their content marketing efforts.',
    monthlyPrice: '$3,500',
    yearlyPrice: '$2,800',
    features: [
      'Daily LinkedIn posts',
      '4 Blog articles per month',
      'Advanced SEO optimization',
      'Biweekly strategy calls',
      '1 Case study per month',
      'Priority support'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for established SaaS companies with advanced content needs.',
    monthlyPrice: '$6,000',
    yearlyPrice: '$4,800',
    features: [
      'Multichannel content strategy',
      '8 Blog articles per month',
      'Premium SEO optimization',
      'Weekly strategy calls',
      '2 Case studies per month',
      'Dedicated content manager'
    ],
    highlighted: false
  }
];

const ServicePricing = () => {
  const [annually, setAnnually] = useState(true);
  
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
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that fits your business needs and scale as you grow. All plans include our AI-powered content creation process.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-10">
            <span className={`text-sm font-medium ${!annually ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>
            <button 
              onClick={() => setAnnually(!annually)}
              className="relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary"
            >
              <span 
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${annually ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-medium ${annually ? 'text-primary' : 'text-muted-foreground'}`}>Annually (20% off)</span>
          </div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="hover-scale"
            >
              <Card className={`h-full flex flex-col border-0 shadow-md rounded-xl overflow-hidden ${plan.highlighted ? 'border-2 border-blue-500 relative' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute top-0 inset-x-0 transform translate-y-0">
                    <div className="bg-blue-500 text-white text-xs font-semibold py-1 text-center">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <CardHeader className={`pb-4 ${plan.highlighted ? 'pt-8' : ''}`}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-0 grow">
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">{annually ? plan.yearlyPrice : plan.monthlyPrice}</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button 
                    variant={plan.highlighted ? "default" : "outline"} 
                    className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'border-2'} rounded-lg group`} 
                    size="lg"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8">
            Need a custom solution? Contact us for a personalized quote tailored to your specific business requirements.
          </p>
          <Button variant="outline" className="rounded-full px-8 py-6 border-2 text-base hover:bg-blue-50/50">
            Contact for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
