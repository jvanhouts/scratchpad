import type { ComponentType } from 'react';

type PostModule = {
  default: ComponentType;
  frontmatter: Record<string, unknown>;
};

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type Post = PostFrontmatter & {
  Component: ComponentType;
  formattedDate: string;
};

const postModules = import.meta.glob('../content/posts/*.mdx', {
  eager: true,
}) as Record<string, PostModule>;

function assertFrontmatter(data: Record<string, unknown>, filePath: string): PostFrontmatter {
  const requiredFields = ['title', 'description', 'date', 'slug'] as const;

  for (const field of requiredFields) {
    if (typeof data[field] !== 'string' || data[field].trim().length === 0) {
      throw new Error(`Missing required frontmatter field "${field}" in ${filePath}`);
    }
  }

  return {
    title: data.title as string,
    description: data.description as string,
    date: (data.date as string).split('T')[0],
    slug: data.slug as string,
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}

export const posts: Post[] = Object.entries(postModules)
  .map(([filePath, module]) => {
    const frontmatter = assertFrontmatter(module.frontmatter, filePath);
    return {
      ...frontmatter,
      Component: module.default,
      formattedDate: formatDate(frontmatter.date),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
