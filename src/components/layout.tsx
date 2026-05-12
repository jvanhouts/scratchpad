import { Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const { pathname } = useLocation();
  const isPostPage = pathname.startsWith('/posts/');

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center bg-background">
      {!isPostPage ? (
        <header className="site-header">
          <nav aria-label="Primary" className="site-toggle">
            <a className="site-toggle__item" href="http://localhost:5173/">
              Website
            </a>
            <a aria-current="page" className="site-toggle__item site-toggle__item--active" href="/">
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
