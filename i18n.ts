import { getRequestConfig } from "next-intl/server";

export const supportedLocales = ["en-US", "de-DE"];
export const defaultLocale = "en-US";

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./locales/${locale}.json`)).default,
}));
