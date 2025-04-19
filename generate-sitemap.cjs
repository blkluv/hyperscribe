const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://creai.digital';

const pages = [
  '/',
  '/services',
  '/why-us',
  '/pricing',
  '/contact',
  '/terms-condition',
  '/privacy-policy'
];

(async () => {
  const sitemap = new SitemapStream({ 
    hostname: baseUrl,
    xmlns: {
      news: true,
      xhtml: true,
      image: true,
      video: true
    }
  });

  // Add each page to the sitemap
  pages.forEach(page => {
    sitemap.write({
      url: page,
      changefreq: 'daily',
      priority: page === '/' ? 1.0 : 0.8
    });
  });

  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  
  // Ensure the public directory exists
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write the sitemap file
  fs.writeFileSync(
    path.resolve(publicDir, 'sitemap.xml'),
    sitemapOutput.toString()
  );
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`Sitemap location: ${baseUrl}/sitemap.xml`);
})();