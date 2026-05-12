import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MDXProvider } from '@mdx-js/react';
import App from './App';
import { mdxComponents } from './components/mdx-components';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MDXProvider components={mdxComponents}>
      <App />
    </MDXProvider>
  </StrictMode>,
);
