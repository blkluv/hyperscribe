
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

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
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-slate-50 bg-gradient-to-br from-blue-600/10 via-purple-500/15 to-blue-400/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                INSIGHTS & RESOURCES
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Latest from Our Blog
              </h1>
              <p className="text-muted-foreground text-lg">
                Expert advice to help SaaS businesses grow through strategic content marketing.
              </p>
            </div>
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
