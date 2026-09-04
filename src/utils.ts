// Prefix internal links/assets with the configured base path so the site works
// both at  <username>.github.io/  and  <username>.github.io/<repo>/
const BASE = import.meta.env.BASE_URL; // always ends with '/'

export function withBase(path: string): string {
  if (!path) return BASE;
  if (/^https?:\/\//.test(path)) return path; // external links untouched
  return (BASE + path.replace(/^\//, "")).replace(/\/{2,}/g, "/");
}
