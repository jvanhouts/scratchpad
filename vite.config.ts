import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import matter from 'gray-matter';
import remarkFrontmatter from 'remark-frontmatter';
import { defineConfig } from 'vite';

function mdxFrontmatter() {
  return {
    name: 'mdx-frontmatter',
    enforce: 'pre' as const,
    transform(source: string, id: string) {
      const [filePath] = id.split('?', 1);

      if (!filePath.endsWith('.mdx')) {
        return null;
      }

      const { content, data } = matter(source);

      return {
        code: `export const frontmatter = ${JSON.stringify(data)};\n${content}`,
        map: null,
      };
    },
  };
}

export default defineConfig({
  base: '/',
  plugins: [
    mdxFrontmatter(),
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkFrontmatter],
    }),
    react(),
  ],
});
