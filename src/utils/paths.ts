export type Locale = 'en' | 'zh';

/**
 * Returns the configured Astro base path without a trailing slash
 * (or '' when deployed at domain root '/').
 */
export function getBasePath(): string {
  const raw = import.meta.env.BASE_URL || '/';
  if (raw === '/') return '';
  return raw.endsWith('/') ? raw.slice(0, -1) : raw;
}

/**
 * Prefixes an internal path with Astro's configured BASE_URL.
 * External links, mailto links, and hash links are returned untouched.
 */
export function withBase(path: string): string {
  if (!path) return `${getBasePath()}/`;
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('#')
  ) {
    return path;
  }
  const base = getBasePath();
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

/**
 * Builds a localized internal route.
 * English lives at root (`/`), Chinese lives under `/zh/`.
 */
export function localePath(lang: Locale, route = ''): string {
  const clean = route.replace(/^\/+|\/+$/g, '');
  if (lang === 'zh') {
    return clean ? withBase(`/zh/${clean}/`) : withBase('/zh/');
  }
  return clean ? withBase(`/${clean}/`) : withBase('/');
}

/**
 * Computes the equivalent URL in the opposite locale for the language switcher.
 */
export function getAlternateLocalePath(currentPathname: string, targetLang: Locale): string {
  const base = getBasePath();
  let stripped = currentPathname;
  if (base && stripped.startsWith(base)) {
    stripped = stripped.slice(base.length) || '/';
  }

  // Remove leading /zh or /zh/
  if (stripped === '/zh' || stripped === '/zh/') {
    stripped = '/';
  } else if (stripped.startsWith('/zh/')) {
    stripped = stripped.slice(3);
  }

  const cleanRoute = stripped.replace(/^\/+|\/+$/g, '');
  return localePath(targetLang, cleanRoute);
}

/**
 * Checks whether a navigation link matches the current pathname.
 */
export function isActiveRoute(currentPathname: string, targetHref: string): boolean {
  const norm = (p: string) => {
    const trimmed = p.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  };
  return norm(currentPathname) === norm(targetHref);
}
