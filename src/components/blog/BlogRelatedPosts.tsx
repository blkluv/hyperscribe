
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/lib/cms/types';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface BlogRelatedPostsProps {
  posts: BlogPost[];
}

const BlogRelatedPosts = ({ posts }: BlogRelatedPostsProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">You might also like</h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {posts.map(post => (
          <motion.div key={post.id} variants={item}>
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="pt-6 flex-grow">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline"
                >
                  Read more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogRelatedPosts;
