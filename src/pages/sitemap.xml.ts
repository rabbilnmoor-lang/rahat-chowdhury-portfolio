import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { withBase } from "../utils";

const staticPaths = ["/", "/about/", "/career/", "/projects/", "/expertise/", "/cover-letter/", "/cv/", "/contact/"];

export const GET: APIRoute = () => {
  const urls = [...staticPaths, ...projects.map((p) => `/projects/${p.slug}/`)].map((p) =>
    new URL(withBase(p), site.siteUrl).toString()
  );
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n") +
    `\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
