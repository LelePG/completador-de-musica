"use client";
import Song from "@/components/song/Song";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { getSongLyrics } from "@/actions/Api";
import Loading from "@/components/template/Loading";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";
import Buttons from "@/components/song/Buttons";

export default function SongPage() {
	const { getFromLS } = useLocalStorage();
	const [song, setSong] = useState(null);
	const router = useRouter();
	const { addError } = useErrorMessage();
	const t = useTranslations();

	useEffect(() => {
		(async () => {
			const song = getFromLS();
			if (song === null) {
				router.push("/");
			}
			try {
				const lyrics = await getSongLyrics(song?.id);
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

	return (
		<div className="flex justify-center pb-24 md:pb-36 xl:pb-16 pt-8 overflow-x-hidden">
			{song === null && <Loading />}
			{song !== null && (
				<>
					<Song title={song?.title} artist={song?.artist} lyrics={song?.lyrics} difficulty={parseInt(String(song?.difficulty))} />
					<Buttons />
				</>
			)}
		</div>
	);
}
