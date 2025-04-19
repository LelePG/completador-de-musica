import React from "react";
import Popup from "./Popup";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";

export default function ErrorPopup() {
	const { getErrorMessage, removeError } = useErrorMessage();
	const message = getErrorMessage();
	const t = useTranslations();
	return (
		<Popup onClose={removeError} isOpen={message !== null}>
			<h2 className="text-red-500 text-4xl font-bold w-1/5">{t("errors.error")}</h2>
			<p className="p-2 text-2xl">{message}</p>
		</Popup>
	);
}
