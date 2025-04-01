
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-0 shadow-md overflow-hidden">
        <div className={`aspect-video ${post.featuredImage} flex items-center justify-center`}>
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
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <span className="text-xs font-medium px-2.5 py-0.5 bg-blue-50 text-blue-600 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.readTime}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.date}
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
          <Button 
            variant="ghost" 
            className="group p-0" 
            size="sm"
            asChild
          >
            <Link to={`/blog/${post.slug}`}>
              Read Article
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
