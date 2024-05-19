"use client";
import ErrorPopup from "@/components/template/ErrorPopup";
import { ErrorMessageProvider } from "@/contexts/ErrorMessageContext";

export default function Layout({ children }) {
	return (
		<ErrorMessageProvider>
			{children}
			<ErrorPopup />
		</ErrorMessageProvider>
	);
}
