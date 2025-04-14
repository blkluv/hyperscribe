
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BlogPost, Author, BlogCategory } from './types';
import { mockBlogPosts, mockAuthors, mockCategories } from './mockData';

interface CMSContextType {
  blogPosts: BlogPost[];
  authors: Author[];
  categories: BlogCategory[];
  isLoading: boolean;
  getBlogPostBySlug: (slug: string) => BlogPost | undefined;
  getBlogPostsByCategory: (categorySlug: string) => BlogPost[];
  getRecentPosts: (limit?: number) => BlogPost[];
  getCategories: () => BlogCategory[];
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would be fetching from an API
    // For now, we're using mock data
    const loadData = async () => {
      try {
        setBlogPosts(mockBlogPosts);
        setAuthors(mockAuthors);
        setCategories(mockCategories);
      } catch (error) {
        console.error('Error loading CMS data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const getBlogPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
  };

  const getBlogPostsByCategory = (categorySlug: string) => {
    return blogPosts.filter(post => 
      post.categories.some(category => category.slug === categorySlug)
    );
  };

  const getRecentPosts = (limit = 3) => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit);
  };

  const getCategories = () => {
    return categories;
  };

  return (
    <CMSContext.Provider
      value={{
        blogPosts,
        authors,
        categories,
        isLoading,
        getBlogPostBySlug,
        getBlogPostsByCategory,
        getRecentPosts,
        getCategories,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
