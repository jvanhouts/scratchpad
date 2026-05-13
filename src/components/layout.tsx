import { Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const { pathname } = useLocation();
  const isPostPage = pathname.startsWith('/posts/');

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center bg-background">
      {!isPostPage ? (
        <header className="w-full max-w-5xl px-8 pt-6 lg:px-0">
          <nav
            aria-label="Primary"
            className="flex w-fit items-center gap-1 rounded-full border border-accent/10 bg-background p-1 text-lg font-semibold shadow-[0_0_3px_rgb(18_91_0_/_0.20)]"
          >
            <a className="rounded-full px-6 py-2 text-accent/70 no-underline transition-colors hover:bg-accent/5 hover:text-accent" href="http://localhost:5173/">
              Website
            </a>
            <a
              aria-current="page"
              className="rounded-full bg-accent px-6 py-2 text-background no-underline shadow-sm transition-colors hover:bg-accent/5 hover:text-accent"
              href="/"
            >
              Blog
            </a>
          </nav>
        </header>
      ) : null}

      <main className="w-full max-w-5xl flex-1 px-8 py-10 lg:px-0">
        <Outlet />
      </main>

      <footer className="w-full max-w-5xl border-t border-accent/15 px-8 py-8 text-sm text-muted lg:px-0">
        Personal notes, technical edges, and things worth keeping track of.
      </footer>
    </div>
  );
}
