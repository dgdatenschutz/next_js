import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import NotFound from "@/app/[locale]/not-found";

// Map country-specific locales to base language files
const localeToLanguageMap: Record<string, string> = {
  "de": "de",
  "de-de": "de",
  "de-at": "de",
  "de-ch": "de",
  "en": "en",
  "en-us": "en",
  "en-gb": "en",
  "en-ca": "en",
  "en-au": "en",
};

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) NotFound;

  // Map the locale to the appropriate language file
  const languageFile = localeToLanguageMap[locale] || locale;

  return {
    messages: (await import(`../messages/${languageFile}.json`)).default,
  };
});