import { Link, Navigate, useParams } from 'react-router-dom';
import { getPostBySlug } from '../lib/posts';

export function PostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const { Component } = post;

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        className="inline-flex rounded-full text-sm font-semibold text-accent underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        to="/"
      >
        Home
      </Link>

      <header className="mt-10 border-b border-accent/15 pb-8">
        <p className="text-sm font-semibold text-muted">{post.formattedDate}</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-accent sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-xl leading-8 text-ink/80">{post.description}</p>
      </header>

      <div className="prose prose-lg prose-green mt-10 max-w-none text-ink prose-headings:text-accent prose-a:text-accent prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-accent/20 prose-th:bg-accent/5 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-td:border prose-td:border-accent/15 prose-td:px-4 prose-td:py-2">
        <Component />
      </div>
    </article>
  );
}
