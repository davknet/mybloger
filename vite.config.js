// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';
// // import tailwindcss from '@tailwindcss/vite'
// import tailwindcss from 'tailwindcss';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input:  'resources/js/app.jsx' ,
//             refresh: true,
//         }),
//         tailwindcss(),
//         react() ,
//     ],
//     resolve:{

//         alias:{
//             "@" : "resources/js",
//         },

//     },
// });

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
