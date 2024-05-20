"use client";
import Button from "@/components/template/Button";
import Song from "@/components/song/Song";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import ApiService from "@/model/ApiService";
import GithubLink from "@/components/template/GithubLink";
import Loading from "@/components/template/Loading";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";
export default function SongPage() {
	const { get } = useLocalStorage();
	const [song, setSong] = useState(null);
	const router = useRouter();
	const { addError } = useErrorMessage();
	const t = useTranslations();

	useEffect(() => {
		(async () => {
			const song = get();
			if (song === null) {
				router.push("/");
			}
			try {
				const lyrics = await ApiService.getSongLyrics(song?.title, song?.artist);
				if (!lyrics) {
					throw new Error(t("errors.lyricsNotFoundReturnHome"));
				}
				const obj = { title: song?.title, artist: song?.artist, difficulty: song?.difficulty, lyrics };
				setSong(obj);
			} catch (e) {
				addError(e);
			}
		})();
	}, []);

	const dispatchEvent = useCallback((eventName) => {
		window.dispatchEvent(new CustomEvent(eventName));
	}, []);

	const callbackCorrect = () => dispatchEvent("correct");
	const callbackClean = () => dispatchEvent("clean");
	const callbackShow = () => dispatchEvent("open");
	const callbackHide = () => dispatchEvent("close");
	const callbackReload = () => window.location.reload();
	const callbackGoBack = useCallback(() => router.push("/"), [router]);

	const buttonClassname = " p-3 m-1 lg:px-4 lg:py-3 lg:m-2 xl:px-6 xl:py-4 xl:text-2xl ";

	return (
		<div className="flex justify-center pb-24 md:pb-36 xl:pb-16 pt-8 overflow-x-hidden">
			{song === null && <Loading />}
			{song !== null && (
				<>
					<Song title={song?.title} artist={song?.artist} lyrics={song?.lyrics} difficulty={parseInt(String(song?.difficulty))} />
					<section className="fixed bottom-5 md:bottom-6 w-full md:w-10/12 md:h-25 flex justify-center flex-wrap mb-3 md:mb-10 lg:mb-6 ">
						<Button text={t("songPage.buttons.correctAll")} callback={callbackCorrect} color="bg-red-500" className={buttonClassname} />
						<Button text={t("songPage.buttons.clearAll")} callback={callbackClean} color="bg-yellow-500" className={buttonClassname} />
						<Button text={t("songPage.buttons.showAll")} callback={callbackShow} color="bg-indigo-500" className={buttonClassname} />
						<Button text={t("songPage.buttons.hideAll")} callback={callbackHide} color="bg-green-500" className={buttonClassname} />
						<Button text={t("songPage.buttons.resort")} callback={callbackReload} color="bg-pink-500" className={buttonClassname} />
						<Button text={t("songPage.buttons.back")} callback={callbackGoBack} color="bg-blue-500" className={buttonClassname} />
					</section>
				</>
			)}
		</div>
	);
}
