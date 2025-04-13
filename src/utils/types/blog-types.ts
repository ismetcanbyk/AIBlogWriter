export enum BlogType {
  JSON = 'JSON',
  MARKDOWN = 'MARKDOWN',
}

export interface BlogPost {
  id: string;
  slug: string;
  frontmatter: {
    published: boolean;
    title: string;
    description: string;
    date: string;
    category: string;
    featured: boolean;
    trending: boolean;
    readingTime: string;
  };
  content: string;
}

export interface BlogContext {
  title: string;
  language: string;
  keys?: string;
  seo?: boolean;
}

export interface BlogGenerateRequest {
  type: BlogType;
  context: BlogContext;
}
