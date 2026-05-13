import { PostCard } from './post-card';
import { posts } from '../lib/posts';

export function HomePage() {
  return (
    <section aria-label="Posts" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(13rem,auto)]">
      <div
        className="relative flex items-start min-h-64 overflow-hidden rounded-card bg-cover bg-center p-6 shadow-[0_0_3px_rgb(18_91_0_/_0.25)] lg:col-span-2 lg:row-span-2 lg:min-h-0 lg:p-8"
      >
        <img src="/images/akiba.jpeg" alt="Akiba" className="absolute inset-0 w-full h-full object-cover" />
        {/* <div className="relative z-[2] w-fit">
          <div aria-hidden="true" className="absolute inset-0 -left-16 z-0 rounded-3xl bg-white/80" />
          <h1 className="relative z-10 p-4 text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
            Some of my thoughts and ideas
          </h1>
        </div> */}
      </div>

      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.slug} post={post} />)
      ) : (
        <p className="rounded-card border border-accent/15 bg-card/80 p-6 text-lg text-ink/80 lg:col-span-2">No posts yet.</p>
      )}
    </section>
  );
}
