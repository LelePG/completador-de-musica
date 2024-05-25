"use client";
import Footer from "@/components/template/Footer";
import ErrorPopup from "@/components/template/ErrorPopup";
import { ErrorMessageProvider } from "@/contexts/ErrorMessageContext";
import { useTranslations } from "next-intl";

export default function Layout({ children }) {
	const t = useTranslations();
	return (
		<div className="flex flex-col justify-between min-h-screen ">
			<ErrorMessageProvider>
				{children}
				<ErrorPopup />
			</ErrorMessageProvider>
			<Footer text={t("homePage.madeBy")} />
		</div>
	);
}
