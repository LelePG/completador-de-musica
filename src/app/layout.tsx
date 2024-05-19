import "../styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
	description: "Boas vindas à aplicação de completar músicas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="w-screen h-screen">{children}</body>
		</html>
	);
}
