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
	});

	const dispatchEvent = useCallback((eventName) => {
		window.dispatchEvent(new CustomEvent(eventName));
	}, []);

	const callbackCorrect = () => dispatchEvent("correct");
	const callbackClean = () => dispatchEvent("clean");
	const callbackShow = () => dispatchEvent("open");
	const callbackHide = () => dispatchEvent("close");
	const callbackReload = () => window.location.reload();
	const callbackGoBack = useCallback(() => router.push("/"), [router]);

	return (
		<div className="flex justify-center pb-24 pt-8 overflow-x-hidden">
			{song === null && <Loading />}
			{song !== null && (
				<>
					<Song title={song?.title} artist={song?.artist} lyrics={song?.lyrics} difficulty={parseInt(String(song?.difficulty))} />
					<section className="fixed bottom-3 w-10/12 h-25 flex justify-center flex-wrap ">
						<Button text={t("songPage.buttons.correctAll")} callback={callbackCorrect} color="bg-red-500" />
						<Button text={t("songPage.buttons.clearAll")} callback={callbackClean} color="bg-yellow-500" />
						<Button text={t("songPage.buttons.showAll")} callback={callbackShow} color="bg-indigo-500" />
						<Button text={t("songPage.buttons.hideAll")} callback={callbackHide} color="bg-green-500" />
						<Button text={t("songPage.buttons.resort")} callback={callbackReload} color="bg-pink-500" />
						<Button text={t("songPage.buttons.back")} callback={callbackGoBack} color="bg-blue-500" />
						<GithubLink />
					</section>
				</>
			)}
		</div>
	);
}
