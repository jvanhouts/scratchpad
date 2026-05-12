import { Link } from 'react-router-dom';
import type { Post } from '../lib/posts';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="card-shadow group flex h-full flex-col rounded-card bg-card/80 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lift">
      <p className="text-sm font-semibold text-muted">{post.formattedDate}</p>
      <h2 className="mt-3 text-2xl font-bold leading-tight text-accent">{post.title}</h2>
      <p className="mt-3 flex-1 text-base leading-7 text-ink/85">{post.description}</p>
      <Link
        className="focus-ring mt-6 inline-flex w-fit rounded-full bg-accent px-5 py-2 font-semibold text-background transition-colors group-hover:bg-accent/80"
        to={`/posts/${post.slug}`}
      >
        Read post
      </Link>
    </article>
  );
}
