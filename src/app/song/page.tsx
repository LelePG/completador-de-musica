"use client";
import Button from "../../components/Button";
import Song from "../../components/Song";
import getLyrics from "genius-lyrics-api/lib/getLyrics";
import { useRouter } from "next/navigation";
import language from "../../lang/ptbr";
import { Github } from "../../components/Icons";
import { useCallback, useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import ApiService from "../../model/ApiService";
import Link from "next/link";

interface SongPageProps {
	songTitle: string;
	difficulty: string;
	lyrics: string;
}

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
		<main className="flex justify-center m-5 pb-16">
			<Song title={song?.title} artist={song?.artist} lyrics={song?.lyrics} difficulty={parseInt(String(song?.difficulty))} />
			<Link href="https://github.com/LelePG/completador-de-musica" className="ml-8 my-3 sticky top-3 right-10" target="_blank" rel="noreferrer">
				{Github({ size: 40 })}
			</Link>
			<section className="fixed bottom-3 w-screen h-25 flex justify-center flex-wrap ">
				<Button text={language.textCorrect} callback={callbackCorrect} color="bg-red-300" />
				<Button text={language.textCleanAll} callback={callbackClean} color="bg-yellow-300" />
				<Button text={language.textShowAll} callback={callbackShow} color="bg-indigo-200" />
				<Button text={language.textHideAll} callback={callbackHide} color="bg-green-300" />
				<Button text={language.textReload} callback={callbackReload} color="bg-pink-300" />
				<Button text={language.textGoBack} callback={callbackGoBack} color="bg-blue-300" />
			</section>
		</main>
	);
}
