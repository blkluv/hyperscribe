
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    image: '/placeholder.svg',
    content: 'ContentAI transformed our content strategy. Their blend of AI efficiency and human creativity has helped us consistently produce high-quality pieces that resonate with our audience.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director at SaaSify',
    image: '/placeholder.svg',
    content: 'Working with ContentAI has been a game-changer. We\'ve seen a 40% increase in organic traffic and our lead generation has never been stronger. Their team truly understands SaaS.',
    rating: 5,
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Founder at DataSmart',
    image: '/placeholder.svg',
    content: 'The LinkedIn ghostwriting service has positioned me as a thought leader in my industry. I\'m getting more connection requests and partnership opportunities than ever before.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    role: 'CTO at CloudScale',
    image: '/placeholder.svg',
    content: 'Their content not only sounds great but actually drives results. Our blog posts are ranking on page one for several competitive keywords, bringing us qualified leads every day.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what successful SaaS founders and marketing leaders have to say about our services.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full border-0 shadow-md hover-scale">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-yellow-500 mr-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-white shadow-sm">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Case Study Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-100 text-blue-600">
                CASE STUDY
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How TechFlow Increased MQLs by 156% in 3 Months
              </h3>
              <p className="text-muted-foreground mb-6">
                See how our content strategy helped this SaaS platform dramatically increase their qualified leads while reducing their cost per acquisition.
              </p>
              <div className="flex space-x-8 mb-6">
                <div>
                  <p className="text-3xl font-bold mb-1 text-gradient">+156%</p>
                  <p className="text-sm text-muted-foreground">Marketing Qualified Leads</p>
                </div>
                <div>
                  <p className="text-3xl font-bold mb-1 text-gradient">-32%</p>
                  <p className="text-sm text-muted-foreground">Cost Per Acquisition</p>
                </div>
              </div>
              <button className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors">
                Read the full case study
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 bg-blue-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto bg-white/80 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Growth Metrics</h3>
                  <p className="text-sm text-gray-600">Interactive case study dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
