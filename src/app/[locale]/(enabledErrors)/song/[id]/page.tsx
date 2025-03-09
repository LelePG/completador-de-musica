"use client";
import Song from "@/components/song/Song";
import { useEffect, useState } from "react";
import { getSongLyricsAndInfo } from "@/actions/Api";
import Loading from "@/components/template/Loading";
import useErrorMessage from "@/hooks/useErrorMessage";
import { useTranslations } from "next-intl";
import Buttons from "@/components/song/Buttons";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { SongDTO } from "@/types/SongDTO";

export default function SongPage() {
	const { id } = useParams();
	const searchParams = useSearchParams();
	const difficulty = searchParams.get("difficulty");
	const [song, setSong] = useState<SongDTO | null>(null);
	const { addError } = useErrorMessage();
	const t = useTranslations();

	useEffect(() => {
		(async () => {
			try {
				const song = await getSongLyricsAndInfo(id as string);
				if (!song.lyrics) {
					throw new Error(t("errors.lyricsNotFoundReturnHome"));
				}
				const obj: SongDTO = { ...song, difficulty: +difficulty };
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
					<Song song={song} />
					<Buttons />
				</>
			)}
		</div>
	);
}
