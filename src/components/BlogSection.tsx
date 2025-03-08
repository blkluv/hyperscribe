
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'How AI is Transforming SaaS Content Marketing in 2023',
    excerpt: 'Discover the latest AI-driven strategies that are revolutionizing content creation for SaaS companies.',
    image: 'bg-blue-100',
    date: 'May 15, 2023',
    category: 'AI & Content',
    readTime: '5 min read',
  },
  {
    title: 'The Ultimate Guide to LinkedIn Thought Leadership for SaaS Founders',
    excerpt: 'Learn how to establish yourself as an industry leader and generate high-quality leads through LinkedIn.',
    image: 'bg-purple-100',
    date: 'April 28, 2023',
    category: 'LinkedIn Strategy',
    readTime: '8 min read',
  },
  {
    title: '7 Content Metrics Every SaaS Marketer Should Track',
    excerpt: 'Focus on the metrics that actually matter for your content marketing strategy and business growth.',
    image: 'bg-green-100',
    date: 'April 12, 2023',
    category: 'Analytics',
    readTime: '6 min read',
  },
];

const BlogSection = () => {
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
              INSIGHTS & RESOURCES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Actionable insights, case studies, and expert advice to help SaaS businesses grow through content marketing.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Button variant="ghost" className="group" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants} className="hover-scale">
              <Card className="h-full flex flex-col border-0 shadow-md overflow-hidden">
                <div className={`aspect-video ${post.image} flex items-center justify-center`}>
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto bg-white/80 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Featured Article</p>
                  </div>
                </div>
                <CardContent className="py-6 grow">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 pb-6">
                  <Button variant="ghost" className="group p-0" size="sm">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Newsletter subscription */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get Weekly SaaS Content Tips
              </h3>
              <p className="text-slate-300 mb-4">
                Join 5,000+ SaaS marketers and founders who get actionable content tips and industry insights every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="whitespace-nowrap rounded-lg bg-blue-600 hover:bg-blue-700" size="lg">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full"></div>
                <div className="relative z-10 p-6 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Weekly Insights</h4>
                      <p className="text-xs text-slate-400">Delivered every Thursday</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Case studies & success stories</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Actionable content tips</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Industry trends & analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
