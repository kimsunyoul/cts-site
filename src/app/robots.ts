export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://cts-site.vercel.app/sitemap.xml',
  };
}
