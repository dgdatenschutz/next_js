import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(de|en|de-de|de-at|de-ch|en-us|en-gb|en-ca|en-au)/:path*"],
};