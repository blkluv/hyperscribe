
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  categories: BlogCategory[];
  tags: string[];
  readingTime: number;
}
