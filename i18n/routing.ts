import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "de", "ka", "de-de", "de-at", "de-ch", "en-us", "en-gb", "en-ca", "en-au"],
  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);