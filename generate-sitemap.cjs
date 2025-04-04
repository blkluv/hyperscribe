const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.hyperscriber.com';

const pages = [
  '/',
  '/services',
  '/how-it-works',
  '/contact',
  '/terms-condition',
  '/privacy-policy'
];

(async () => {
  const sitemap = new SitemapStream({ hostname: baseUrl });

  pages.forEach(page => sitemap.write(page));

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);

  fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemapOutput.toString());
  console.log('✅ Sitemap generated successfully!');
})();