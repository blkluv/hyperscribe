
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>HyperScriber | Blog</title>
        <meta name="description" content="Expert advice to help SaaS businesses grow through content marketing." />
        <link rel="canonical" href="https://hyperscriber.com/blog" />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Hero Section - Updated to match other pages */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600/10 via-blue-500/15 to-blue-400/5">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
                INSIGHTS & RESOURCES
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Latest from Our <span className="text-gradient bg-gradient-to-r from-blue-600 to-blue-700">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Expert advice to help SaaS businesses grow through strategic content marketing.
              </p>
              
              {/* Call-to-action for subscription */}
              <div className="mt-6 mb-4 flex justify-center">
                <a href="https://calendly.com/hyperscriber/free-introductory-call" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full group">
                    Get content insights in your inbox
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Blog;
