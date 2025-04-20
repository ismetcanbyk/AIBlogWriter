export enum BlogType {
  JSON = 'JSON',
  MARKDOWN = 'MARKDOWN',
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
