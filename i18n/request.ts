import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import NotFound from "@/app/[locale]/not-found";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) NotFound;

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
