
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft, Share2, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`HyperScriber | ${post.title}`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://hyperscriber.com/blog/${post.slug}`} />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Post Header */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mb-6"
                  asChild
                >
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
                
                <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  {post.category}
                </span>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </div>
                </div>
              </div>
              
              <div className={`aspect-video ${post.featuredImage} rounded-xl mb-10`}></div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <article 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></article>
              
              <Separator className="my-12" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    {post.author.avatar ? (
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-full h-full rounded-full object-cover" 
                      />
                    ) : (
                      <span className="text-lg font-bold text-blue-600">
                        {post.author.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">Written by</p>
                    <p className="text-lg font-bold">{post.author.name}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default BlogPost;
