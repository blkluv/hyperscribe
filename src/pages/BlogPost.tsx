
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { useCMS } from '@/lib/cms/cmsContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import CTASection from '@/components/CTASection';
import BlogRelatedPosts from '@/components/blog/BlogRelatedPosts';
import Markdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getBlogPostBySlug, getRecentPosts, isLoading } = useCMS();
  
  const post = getBlogPostBySlug(slug || '');
  const relatedPosts = getRecentPosts(3).filter(p => p.id !== post?.id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!isLoading && !post) {
      navigate('/blog', { replace: true });
    }
  }, [post, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-12"></div>
              <div className="h-96 bg-gray-200 rounded mb-8"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
              <div className="h-4 bg-gray-200 rounded mb-8 w-2/3"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!post) return null;
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title} | HyperScriber Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://hyperscriber.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      
      <main className="mt-16 pt-8">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground mb-6 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center mb-8 text-sm text-muted-foreground">
            <div className="flex items-center mr-6">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="prose prose-lg max-w-none mb-10">
            <Markdown>{post.content}</Markdown>
          </div>
          
          <div className="border-t border-b py-6 my-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-600">Categories:</span>
              {post.categories.map(category => (
                <Link 
                  key={category.id} 
                  to={`/blog?category=${category.slug}`}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm font-medium text-gray-600">Tags:</span>
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Avatar className="h-16 w-16">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="grow text-center sm:text-left">
              <h3 className="font-bold text-lg">{post.author.name}</h3>
              <p className="text-muted-foreground text-sm mb-2">{post.author.bio}</p>
              <a 
                href={`https://www.linkedin.com/`} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </article>
        
        <Separator className="mb-16" />
        
        <section className="container mx-auto px-4 max-w-6xl mb-16">
          <BlogRelatedPosts posts={relatedPosts} />
        </section>
        
        <Separator />
        <CTASection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default BlogPost;
