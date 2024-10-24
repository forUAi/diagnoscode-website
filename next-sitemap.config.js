module.exports = {
  siteUrl: 'https://diagnoscode-website-jcit.vercel.app',  // Your actual site URL
  generateRobotsTxt: true,  // Generates robots.txt file along with the sitemap
  outDir: './public',  // Sitemap output directory
  // Add static paths manually for the App Router pages
  additionalPaths: async (config) => [
    await config.transform(config, '/about'),
    await config.transform(config, '/careers'),
    await config.transform(config, '/impact'),
    await config.transform(config, '/services'),
    await config.transform(config, '/'),  // Homepage
  ],
};
