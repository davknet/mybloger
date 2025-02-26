import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import DefaultLayout from '@/layouts/DefaultLayout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let new_pages =  pages[`./Pages/${name}.jsx`]

    new_pages.default.layout = new_pages.default.layout || ((new_pages) => <DefaultLayout  children={new_pages}/> ) ;
   return new_pages ;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress:{
    color: 'hsl(44, 100%, 50%)',
  },
})
