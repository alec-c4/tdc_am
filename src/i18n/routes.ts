import { defaultLocale, localePrefix, type Locale } from "./locales";

/**
 * Route slugs are the same across all three locales (English words used as URL
 * segments even on hy/ru pages). That keeps a language switch a pure prefix swap and
 * gives every page one stable canonical path per language. See redesign-plan.md §6.6.
 */
export const routes = {
  home: () => "/",
  about: () => "/about/",
  services: () => "/services/",
  service: (slug: string) => `/services/${slug}/`,
  partners: () => "/partners/",
  contact: () => "/contact/",
} as const;

/** Build the localized href for a route path (as returned by `routes.*`). */
export function href(locale: Locale, path: string): string {
  const prefix = localePrefix(locale);
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}

/** Given the current locale and the route-relative path, list every locale's URL for hreflang/alternate links. */
export function alternates(path: string): { locale: Locale; url: string }[] {
  return (["hy", "en", "ru"] as Locale[]).map((locale) => ({
    locale,
    url: href(locale, path),
  }));
}

export { defaultLocale };
