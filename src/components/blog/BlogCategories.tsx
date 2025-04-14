
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCMS } from '@/lib/cms/cmsContext';
import { cn } from '@/lib/utils';

const BlogCategories = () => {
  const { categories } = useCMS();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get('category');
  
  return (
    <div className="p-6 bg-slate-50 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/blog" 
            className={cn(
              "block py-2 px-3 rounded-md hover:bg-blue-50 transition-colors",
              !currentCategory && "bg-blue-50 text-blue-700 font-medium"
            )}
          >
            All Posts
          </Link>
        </li>
        {categories.map(category => (
          <li key={category.id}>
            <Link 
              to={`/blog?category=${category.slug}`}
              className={cn(
                "block py-2 px-3 rounded-md hover:bg-blue-50 transition-colors",
                currentCategory === category.slug && "bg-blue-50 text-blue-700 font-medium"
              )}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
