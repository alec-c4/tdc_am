import { hy } from "./hy";
import { en } from "./en";
import { ru } from "./ru";
import type { Dictionary } from "./types";
import type { Locale } from "./locales";

export const dictionaries: Record<Locale, Dictionary> = { hy, en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export * from "./locales";
export type { Dictionary, ServiceEntry, TeamMember, StatEntry } from "./types";
