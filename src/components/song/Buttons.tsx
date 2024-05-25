import Button from "@/components/template/Button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useTranslations } from "next-intl";

export default function Buttons() {
	const router = useRouter();
	const t = useTranslations();

	const dispatchEvent = useCallback((eventName) => {
		window.dispatchEvent(new CustomEvent(eventName));
	}, []);

	const callbackCorrect = () => dispatchEvent("correct");
	const callbackClean = () => dispatchEvent("clean");
	const callbackShow = () => dispatchEvent("open");
	const callbackHide = () => dispatchEvent("close");
	const callbackReload = () => window.location.reload();
	const callbackGoBack = useCallback(() => router.push("/"), [router]);

	const buttonClassname = (bgColor: string) => ` ${bgColor} p-3 m-1 lg:px-4 lg:py-3 lg:m-2 xl:px-6 xl:py-4 xl:text-2xl `;

	return (
		<div className="fixed bottom-5 md:bottom-6 w-full md:w-10/12 md:h-25 flex justify-center flex-wrap mb-3 md:mb-10 lg:mb-6 ">
			<Button text={t("songPage.buttons.correctAll")} callback={callbackCorrect} className={buttonClassname("bg-red-500")} />
			<Button text={t("songPage.buttons.clearAll")} callback={callbackClean} className={buttonClassname("bg-yellow-500")} />
			<Button text={t("songPage.buttons.showAll")} callback={callbackShow} className={buttonClassname("bg-indigo-500")} />
			<Button text={t("songPage.buttons.hideAll")} callback={callbackHide} className={buttonClassname("bg-green-500")} />
			<Button text={t("songPage.buttons.resort")} callback={callbackReload} className={buttonClassname("bg-pink-500")} />
			<Button text={t("songPage.buttons.back")} callback={callbackGoBack} className={buttonClassname("bg-blue-500")} />
		</div>
	);
}
