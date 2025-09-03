/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://www.cubabakery.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Increase priority for homepage
    const priority = path === "/" ? 1.0 : 0.7;
    const changefreq = path === "/" ? "daily" : "weekly";
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
