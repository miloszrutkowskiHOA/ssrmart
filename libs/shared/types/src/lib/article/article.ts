export type ArticleImage = {
  url: string;
  alt: string;
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: ArticleImage;
  author: string;
  publishedAt: string;
  modifiedAt?: string;
  expirationTime?: string;
  category: string;
  tags: string[];
  readTime: number; // in minutes
};
