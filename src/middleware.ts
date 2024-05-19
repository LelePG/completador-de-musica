import createMiddleware from "next-intl/middleware";
import { defaultLocale, supportedLocales } from "../i18n";

export default createMiddleware({
	// A list of all locales that are supported
	locales: supportedLocales,

	// Used when no locale matches
	defaultLocale,
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(pt-BR)/:path*"],
};
