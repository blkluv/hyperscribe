
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { useCMS } from '@/lib/cms/cmsContext';
import { BlogPost } from '@/lib/cms/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import BlogHero from '@/components/blog/BlogHero';
import BlogCategories from '@/components/blog/BlogCategories';
import CTASection from '@/components/CTASection';

const Blog = () => {
  const { blogPosts, categories, isLoading } = useCMS();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
        <meta 
          name="description" 
          content="Insights, strategies, and best practices for AI-powered content marketing, SEO, LinkedIn, and more." 
        />
        <link rel="canonical" href="https://hyperscriber.com/blog" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Navbar />
      
      <main className="mt-16">
        <BlogHero />
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                
                {isLoading ? (
                  // Loading skeletons
                  Array(3).fill(null).map((_, i) => (
                    <div key={i} className="mb-10">
                      <Skeleton className="h-64 w-full mb-4" />
                      <Skeleton className="h-8 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/4 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))
                ) : (
                  // Blog post cards
                  <div className="space-y-10">
                    {blogPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <BlogCategories />
                  
                  <div className="mt-10 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-bold mb-3">Ready to elevate your content?</h3>
                    <p className="text-muted-foreground mb-4">
                      Get a free content audit and learn how we can help you create content that converts.
                    </p>
                    <Link to="/contact">
                      <Button className="w-full">Request A Free Audit</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Separator />
        <CTASection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <motion.article 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="border-b border-gray-200 pb-10"
    >
      <Link to={`/blog/${post.slug}`} className="group">
        <div className="aspect-video overflow-hidden rounded-lg mb-4">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        
        <div className="flex items-center text-blue-600 font-medium">
          Read more 
          <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.article>
  );
};

export default Blog;
