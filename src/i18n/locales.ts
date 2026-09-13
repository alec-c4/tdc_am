export const locales = ["hy", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "hy";

/** Human-readable label for the language switcher, always shown in its own language. */
export const localeLabels: Record<Locale, string> = {
  hy: "ՀԱՅ",
  en: "ENG",
  ru: "РУС",
};

/** BCP-47 tag used in <html lang> and hreflang alternates. */
export const localeTags: Record<Locale, string> = {
  hy: "hy-AM",
  en: "en",
  ru: "ru",
};

/** Base path prefix for a locale's routes. Default locale (hy) lives at the root. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function localizedPath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  return `${localePrefix(locale)}${clean}` || "/";
}
