"use client";
import Button from "../../components/Button";
import Song from "../../components/Song";
import { useRouter } from "next/navigation";
import language from "../../lang/ptbr";
import { useCallback, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import ApiService from "../../model/ApiService";
import GithubLink from "../../components/GithubLink";

export default function SongPage() {
	const { get } = useLocalStorage();
	const [song, setSong] = useState(null);
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const song = get();
			if (song === null) {
				router.push("/");
			}
			try {
				const lyrics = await ApiService.getSongLyrics(song?.title, song?.artist);
				const obj = { title: song?.title, artist: song?.artist, difficulty: song?.difficulty, lyrics };
				setSong(obj);
			} catch (error) {
				console.error("Failed to get lyrics:", error);
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

	return (
		<main className="flex justify-center m-5 pb-24 pt-8">
			<Song title={song?.title} artist={song?.artist} lyrics={song?.lyrics} difficulty={parseInt(String(song?.difficulty))} />
			<section className="fixed bottom-3 w-10/12 h-25 flex justify-center flex-wrap ">
				<Button text={language.textCorrect} callback={callbackCorrect} color="bg-red-500" />
				<Button text={language.textCleanAll} callback={callbackClean} color="bg-yellow-500" />
				<Button text={language.textShowAll} callback={callbackShow} color="bg-indigo-500" />
				<Button text={language.textHideAll} callback={callbackHide} color="bg-green-500" />
				<Button text={language.textReload} callback={callbackReload} color="bg-pink-500" />
				<Button text={language.textGoBack} callback={callbackGoBack} color="bg-blue-500" />
				<GithubLink />
			</section>
		</main>
	);
}
