import "../styles/globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
	description: "Boas vindas à aplicação de completar músicas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<main className=" p-10 min-h-screen">{children}</main>
			</body>
		</html>
	);
}
