import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing, {
  // Enable locale detection from browser settings
  localeDetection: true,
  // Enable alternate links for SEO
  alternateLinks: true
});

export const config = {
  matcher: ["/", "/(de|en|de-de|de-at|de-ch|en-us|en-gb|en-ca|en-au)/:path*"],
};