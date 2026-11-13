const { generateSW } = require('workbox-build');

generateSW({
  globDirectory: '_site',
  globPatterns: ['**/*.{css,html,ico,jpg,jpeg,js,json,png,svg,webp}'],
  globIgnores: ['service-worker.js'],
  swDest: '_site/service-worker.js',
  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.mode === 'navigate',
      handler: 'NetworkFirst',
      options: { cacheName: 'nenek-trivia-pages' },
    },
  ],
}).then(({ count, size, warnings }) => {
  warnings.forEach((warning) => console.warn(warning));
  console.log(`Generated service worker for ${count} files (${size} bytes).`);
});
