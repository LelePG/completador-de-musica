import { getRequestConfig } from "next-intl/server";

export const supportedLocales = ["pt-BR"];
export const defaultLocale = "pt-BR";

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./locales/${locale}.json`)).default,
}));
