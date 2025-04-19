import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Deal Starter',
    description: 'For individual brokers and small teams needing basic AI-powered lead generation.',
    monthlyPrice: '$2,500',
    yearlyPrice: '$2,000',
    features: [      
      '8 LinkedIn posts',
      '2 Blog articles',
      'Standard SEO optimization',
      'Basic PPC ad campaign setup',
      'Monthly SEO performance report',
      '12-hour support response',
      'Email support'
    ],
    highlighted: false,
    links: {
      monthly: 'https://buy.stripe.com/fZe3dx5hR1jefOo28X',
      annually: 'https://buy.stripe.com/aEU29tbGfbXSgSscNC'
  },
  {
    name: 'Portfolio Accelerator',
    description: 'Perfect for REITs and developers with 50+ properties needing consistent deal flow.',
    monthlyPrice: '$5,500',
    yearlyPrice: '$4,400',
    features: [
      '20 AI-powered LinkedIn posts',
      '4 data-driven CRE blogs',
      '2 AI video property reels',
      'Managed PPC campaigns ($1k ad credit)',
      'Weekly performance optimizations',
      '24-hour priority support',
      'Dedicated content specialist',
    ],
    highlighted: true,
    links: {
      monthly: 'https://buy.stripe.com/9AQeWfcKj9PK1XyfZP',
      annually: 'https://buy.stripe.com/dR6eWf4dN2ni31CeVM'
    }
  },
  {
    name: 'Enterprise Growth',
    description: 'For institutional investors and national brokerages needing full-funnel dominance.',
    monthlyPrice: '$9,500',
    yearlyPrice: '$7,600',
    features: [
      '25 LinkedIn ghostwriting posts',
      '8 premium CRE research reports',
      '4 AI video short (1 minute) property reels',
      'Dedicated PPC ad campaign strategist',
      'Biweekly Wizard of Hahz strategy sessions',
      'Same-day VIP support',
      'Multichannel content strategy'
    ],
    highlighted: false,
    links: {
      monthly: 'https://buy.stripe.com/3cs15p9y77HC59KaFx',
      annually: 'https://buy.stripe.com/14k4hB11Bge89q0dRK'
    }
  }
]; // ✅ THIS WAS MISSING

const PricingPlans = () => {
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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            All packages include our core AI-powered content creation process, professional editing, and dedicated support.
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
            <span className={`text-sm font-medium ${annually ? 'text-primary' : 'text-muted-foreground'}`}>Annually (15% off)</span>
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
                <a 
                    href={annually ? plan.links.annually : plan.links.monthly} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full"
                    >

                    <Button 
                      variant={plan.highlighted ? "default" : "outline"} 
                      className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-blue-600 to-blue-700' : 'border-2'} rounded-lg group`} 
                      size="lg"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-8">
            Need a custom solution? Contact us for a personalized quote tailored to your specific business requirements.
          </p>
          <a href="/contact">
            <Button variant="outline" className="rounded-full px-8 py-6 border-2 text-base hover:bg-blue-50/50">
              Contact for Custom Pricing
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
