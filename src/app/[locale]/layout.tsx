import "@/styles/globals.css";
import { defaultLocale, supportedLocales } from "../../../i18n";
import { ReactNode } from "react";

import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
	title: "Home",
	description: "Boas vindas à aplicação de completar músicas",
};

interface Props {
	children: ReactNode;
	params: { locale: string };
}

export default function RootLayout(props: Props) {
	const { children, params } = props;

	return (
		<html lang={params.locale || defaultLocale}>
			<body className="w-screen h-screen m-0 p-0 overflow-x-clip">{children}</body>
		</html>
	);
}
