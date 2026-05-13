import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
      },
      boxShadow: {
        green: '0 0 3px rgb(18 91 0 / 0.25)',
        lift: '0 24px 80px rgb(18 91 0 / 0.10)',
      },
      typography: ({ theme }) => ({
        green: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.accent'),
            '--tw-prose-lead': theme('colors.muted'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.accent'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': 'rgb(18 91 0 / 0.15)',
            '--tw-prose-quotes': theme('colors.accent'),
            '--tw-prose-quote-borders': 'rgb(18 91 0 / 0.25)',
            '--tw-prose-captions': theme('colors.muted'),
            '--tw-prose-code': theme('colors.accent'),
            '--tw-prose-pre-code': theme('colors.background'),
            '--tw-prose-pre-bg': theme('colors.accent'),
            '--tw-prose-th-borders': 'rgb(18 91 0 / 0.2)',
            '--tw-prose-td-borders': 'rgb(18 91 0 / 0.12)',
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
