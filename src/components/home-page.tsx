import { PostCard } from './post-card';
import { posts } from '../lib/posts';
import sakuraImage from '../static/images/sakura.jpeg';

export function HomePage() {
  return (
    <section aria-label="Posts" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(13rem,auto)]">
      <div
        className="hero-thoughts card-shadow relative flex min-h-64 overflow-hidden rounded-card p-6 lg:col-span-2 lg:row-span-2 lg:min-h-0 lg:p-8"
        style={{ backgroundImage: `url(${sakuraImage})` }}
      >
        <div aria-hidden="true" className="hero-thoughts__glass" />
        <h1 className="hero-thoughts__title text-4xl font-bold leading-tight text-accent sm:text-5xl lg:text-6xl">
          Some of my thoughts and ideas
        </h1>
      </div>

      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      ) : (
        <p className="rounded-card border border-accent/15 bg-card/80 p-6 text-lg text-ink/80 lg:col-span-2">No posts yet.</p>
      )}
    </section>
  );
}
