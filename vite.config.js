import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import matter from 'gray-matter';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import { defineConfig } from 'vite';
function mdxFrontmatter() {
    return {
        name: 'mdx-frontmatter',
        enforce: 'pre',
        transform: function (source, id) {
            var filePath = id.split('?', 1)[0];
            if (!filePath.endsWith('.mdx')) {
                return null;
            }
            var _a = matter(source), content = _a.content, data = _a.data;
            return {
                code: "export const frontmatter = ".concat(JSON.stringify(data), ";\n").concat(content),
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
            remarkPlugins: [remarkFrontmatter, remarkGfm],
        }),
        react(),
    ],
});
