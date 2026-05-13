import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type CalloutProps = {
  children: ReactNode;
  tone?: 'note' | 'warning';
};

export function Callout({ children, tone = 'note' }: CalloutProps) {
  return (
    <aside
      className={`not-prose my-8 rounded-card border p-5 shadow-[0_0_3px_rgb(18_91_0_/_0.25)] ${tone === 'warning' ? 'border-accent/30 bg-accent/10' : 'border-accent/15 bg-card/90'}`}
    >
      <div className="text-sm font-bold uppercase tracking-[0.18em] text-muted">{tone}</div>
      <div className="mt-2 text-lg leading-7 text-ink">{children}</div>
    </aside>
  );
}

export const mdxComponents = {
  Callout,
  a: (props: ComponentPropsWithoutRef<'a'>) => <a {...props} target={props.href?.startsWith('http') ? '_blank' : undefined} rel={props.href?.startsWith('http') ? 'noreferrer' : undefined} />,
};
