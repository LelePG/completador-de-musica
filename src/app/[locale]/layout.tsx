import "@/styles/globals.css";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
	title: "Home",
	description: "Aplicação de completar músicas",
};

interface Props {
	children: ReactNode;
}

export default async function RootLayout(props: Props) {
	const { children } = props;
	const locale = await getLocale();
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<Analytics />
			<body className="w-full h-full m-0 p-0 overflow-x-clip">
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
