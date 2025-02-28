import './bootstrap';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import DefaultLayout from '@/layouts/DefaultLayout';

// createInertiaApp({
//     resolve: name => {
//       const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
//       const page = pages[`./Pages/${name}.jsx`]?.default;

//       if (!page) {
//         console.error(`Page component "${name}" not found.`);
//         return;
//       }

//       // Ensure the page component has a layout
//       page.layout = page.layout || (page => <DefaultLayout>{page}</DefaultLayout>);

//       return page;
//     },
//     setup({ el, App, props }) {
//       createRoot(el).render(<App {...props} />);
//     },
//     progress: {
//       color: 'hsl(44, 100%, 50%)',
//     },
//   });


createInertiaApp({
    resolve: async (name) => {
      const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
      let page = pages[`./Pages/${name}.jsx`];

      if (!page) {
        console.error(`Error: Page "${name}" not found.`);
        return;
      }

      page = page.default; // Extract the default export

      // ✅ Fix: Ensure layout is set correctly
      page.layout = page.layout || ((children) => <DefaultLayout>{children}</DefaultLayout>);

      return page;
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />);
    },
    progress: {
      color: 'hsl(44, 100%, 50%)',
    },
  });
